'use strict';
const http = require('node:http');
const https = require('node:https');
const fs = require('node:fs');
const path = require('node:path');
const { pipeline } = require('node:stream');
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.pdf': 'application/pdf' };
function validateConfig(config) {
  const url = new URL(config.backendUrl);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error('backendUrl deve ser a origem do BFF, sem /api, credenciais ou query.');
  if (!Number.isInteger(config.port) || config.port < 1024 || config.port > 65535) throw new Error('port deve estar entre 1024 e 65535.');
  return config;
}
function createServer({ webRoot, backendUrl, port }) {
  const origin = `http://127.0.0.1:${port}`;
  const root = path.resolve(webRoot);
  return http.createServer(async (req, res) => {
    const fail = (status, message) => { res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end(message); };
    // Reject DNS rebinding and requests from other browser origins.
    if (req.headers.host !== `127.0.0.1:${port}` || (req.headers.origin && req.headers.origin !== origin)) return fail(403, 'Origem não permitida');
    const pathname = req.url.split('?')[0];
    if (pathname === '/api' || pathname.startsWith('/api/')) {
      const target = new URL(backendUrl);
      const headers = { ...req.headers, host: target.host };
      delete headers.origin;
      delete headers.referer;
      const upstream = (target.protocol === 'https:' ? https : http).request({
        protocol: target.protocol, hostname: target.hostname, port: target.port,
        method: req.method, path: req.url, headers,
      }, (response) => {
        const responseHeaders = { ...response.headers };
        // Keep BFF redirects on the application origin when they point to the BFF.
        if (responseHeaders.location) {
          const redirect = new URL(responseHeaders.location, target);
          if (redirect.origin === target.origin) responseHeaders.location = redirect.pathname + redirect.search + redirect.hash;
        }
        res.writeHead(response.statusCode, responseHeaders);
        pipeline(response, res, () => {});
      });
      upstream.setTimeout(120000, () => upstream.destroy(new Error('BFF timeout')));
      upstream.on('error', () => { if (!res.headersSent) fail(502, 'BFF indisponível. Verifique backendUrl e o serviço Django.'); else res.destroy(); });
      req.on('aborted', () => upstream.destroy());
      pipeline(req, upstream, () => {});
      return;
    }
    if (!['GET', 'HEAD'].includes(req.method)) return fail(405, 'Método não permitido');
    let decoded;
    try { decoded = decodeURIComponent(pathname); } catch { return fail(400, 'URL inválida'); }
    if (decoded.includes('\0') || decoded.includes('\\')) return fail(403, 'Caminho não permitido');
    let file = path.resolve(root, '.' + decoded);
    if (file !== root && !file.startsWith(root + path.sep)) return fail(403, 'Caminho não permitido');
    try {
      let stat;
      try { stat = await fs.promises.stat(file); } catch (error) { if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error; }
      if (!stat?.isFile()) {
        // Only application routes receive the SPA fallback, never missing MFE assets.
        if (path.extname(decoded) || decoded.startsWith('/remotes/')) return fail(404, 'Arquivo não encontrado');
        file = path.join(root, 'index.html');
      }
      const real = await fs.promises.realpath(file);
      if (!real.startsWith(root + path.sep)) return fail(403, 'Caminho não permitido');
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
      if (req.method === 'HEAD') res.end(); else pipeline(fs.createReadStream(file), res, () => {});
    } catch { if (!res.headersSent) fail(500, 'Falha ao carregar o front. Execute desktop:build.'); else res.destroy(); }
  });
}
module.exports = { createServer, validateConfig };
