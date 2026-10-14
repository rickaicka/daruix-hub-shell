'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { createServer, validateConfig } = require('./server.cjs');
const listen = server => new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server.address().port)));
const close = server => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); });
function request(port, url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request({ hostname: '127.0.0.1', port, path: url, method: options.method || 'GET', headers: options.headers || {} }, res => {
      const chunks = []; res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) }));
    });
    req.on('error', reject); req.end(options.body);
  });
}
test('rotas SPA, MFE, proxy de API, downloads e origem', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'daruix-electron-'));
  await fs.writeFile(path.join(root, 'index.html'), '<app-root>Hub</app-root>');
  await fs.mkdir(path.join(root, 'remotes/obras'), { recursive: true });
  await fs.writeFile(path.join(root, 'remotes/obras/remoteEntry.json'), '{"name":"obras"}');
  await fs.writeFile(path.join(root, 'module.js'), 'export const ok = true;');
  const upstream = http.createServer((req, res) => {
    const chunks = []; req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      if (req.url === '/api/pdf/') {
        res.writeHead(200, { 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment; filename="orcamento.pdf"' });
        return res.end(Buffer.from([0, 1, 2, 255]));
      }
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ url: req.url, method: req.method, auth: req.headers.authorization, body: Buffer.concat(chunks).toString() }));
    });
  });
  const backendPort = await listen(upstream);
  // Reserve a free port before constructing the server's expected Host origin.
  const reservation = http.createServer(); const port = await listen(reservation); await close(reservation);
  const server = createServer({ webRoot: root, backendUrl: `http://127.0.0.1:${backendPort}`, port });
  await new Promise(resolve => server.listen(port, '127.0.0.1', resolve));
  try {
    assert.equal((await request(port, '/hub/obras')).body.toString(), '<app-root>Hub</app-root>');
    assert.match((await request(port, '/module.js')).headers['content-type'], /javascript/);
    assert.equal((await request(port, '/remotes/obras/remoteEntry.json')).status, 200);
    assert.equal((await request(port, '/remotes/obras/missing.json')).status, 404);
    assert.equal((await request(port, '/missing.js')).status, 404);
    assert.equal((await request(port, '/%2e%2e/config.json')).status, 403);
    assert.equal((await request(port, '/', { headers: { Host: 'attacker.example' } })).status, 403);
    assert.equal((await request(port, '/api/auth/login/', { headers: { Origin: 'https://attacker.example' } })).status, 403);
    const api = await request(port, '/api/budgeting/items/?page=2', { method: 'POST', headers: { Authorization: 'Bearer test', 'Content-Type': 'application/json', Origin: `http://127.0.0.1:${port}` }, body: '{"quantity":3}' });
    assert.equal(api.status, 201);
    assert.deepEqual(JSON.parse(api.body), { url: '/api/budgeting/items/?page=2', method: 'POST', auth: 'Bearer test', body: '{"quantity":3}' });
    const pdf = await request(port, '/api/pdf/');
    assert.deepEqual(pdf.body, Buffer.from([0, 1, 2, 255]));
    assert.match(pdf.headers['content-disposition'], /orcamento.pdf/);
    assert.equal((await request(port, '/module.js', { method: 'HEAD' })).body.length, 0);
    await close(upstream);
    assert.equal((await request(port, '/api/health/')).status, 502);
  } finally { await close(server); if (upstream.listening) await close(upstream); await fs.rm(root, { recursive: true, force: true }); }
});
test('configuração rejeita URLs indevidas e portas inválidas', () => {
  assert.doesNotThrow(() => validateConfig({ backendUrl: 'https://hub.example.com', port: 47831 }));
  for (const backendUrl of ['file:///etc/passwd', 'http://user:pass@localhost', 'http://localhost/api', 'http://localhost?x=1']) assert.throws(() => validateConfig({ backendUrl, port: 47831 }));
  assert.throws(() => validateConfig({ backendUrl: 'http://localhost', port: 0 }));
});
