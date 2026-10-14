'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const semver = require('semver');
const shellRoot = path.resolve(__dirname, '..');
const projects = require('./projects.json');
function build(cwd, script) {
  // cmd.exe is required to launch npm.cmd on Windows; arguments are constant.
  const result = process.platform === 'win32'
    ? spawnSync(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', `npm run ${script}`], { cwd, stdio: 'inherit' })
    : spawnSync('npm', ['run', script], { cwd, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`Build falhou: ${cwd} (${script})`);
}
function browserOutput(cwd) {
  const angular = JSON.parse(fs.readFileSync(path.join(cwd, 'angular.json'), 'utf8'));
  const project = Object.values(angular.projects).find(p => p.projectType === 'application');
  const name = Object.keys(angular.projects).find(key => angular.projects[key] === project);
  const config = project.architect.esbuild.options.outputPath;
  const base = typeof config === 'string' ? config : config?.base || `dist/${name}`;
  const browser = typeof config === 'object' ? config.browser ?? 'browser' : 'browser';
  const candidates = [path.resolve(cwd, base, browser), path.resolve(cwd, base)];
  const output = candidates.find(p => fs.existsSync(path.join(p, 'remoteEntry.json')) && fs.existsSync(path.join(p, 'index.html')));
  if (!output) throw new Error(`Saída Angular não encontrada em ${cwd}`);
  return output;
}
try {
  const outputs = {};
  for (const key of ['obras', 'cadastros', 'remessas']) {
    if (!projects[key]) {
      if (key !== 'remessas') throw new Error(`Configure ${key} em desktop/projects.json`);
      console.warn('Remessas não incluído: configure o projeto fonte em desktop/projects.json para recompilá-lo.');
      continue;
    }
    const cwd = path.resolve(__dirname, projects[key]);
    if (!fs.existsSync(path.join(cwd, 'package.json'))) throw new Error(`Projeto ${key} não encontrado: ${cwd}. Ajuste desktop/projects.json.`);
    build(cwd, 'build');
    outputs[key] = browserOutput(cwd);
  }
  build(shellRoot, 'build:shell');
  const destination = path.join(__dirname, 'web');
  fs.rmSync(destination, { recursive: true, force: true });
  fs.cpSync(browserOutput(shellRoot), destination, { recursive: true });
  // Never ship the obsolete Remessas artifact from public/remotes.
  fs.rmSync(path.join(destination, 'remotes'), { recursive: true, force: true });
  const manifest = {};
  for (const [key, output] of Object.entries(outputs)) {
    fs.cpSync(output, path.join(destination, 'remotes', key), { recursive: true });
    manifest[key === 'cadastros' ? 'gestao-administrativa' : key] = `./remotes/${key}/remoteEntry.json`;
  }
  fs.writeFileSync(path.join(destination, 'federation.manifest.json'), JSON.stringify(manifest, null, 2));
  // Fail before packaging when strict shared versions would break federation.
  const entries = [destination, ...Object.keys(outputs).map(key => path.join(destination, 'remotes', key))].map(dir => JSON.parse(fs.readFileSync(path.join(dir, 'remoteEntry.json'), 'utf8')));
  const sharedPackages = new Map();
  for (const entry of entries) for (const shared of entry.shared || []) {
    if (!shared.singleton) continue;
    const candidates = sharedPackages.get(shared.packageName) || [];
    candidates.push(shared);
    sharedPackages.set(shared.packageName, candidates);
  }
  for (const [name, candidates] of sharedPackages) {
    const strict = candidates.filter(shared => shared.strictVersion && shared.requiredVersion && shared.requiredVersion !== 'auto');
    if (!strict.length) continue;
    const compatible = candidates.some(candidate => strict.every(shared => semver.satisfies(candidate.version, shared.requiredVersion)));
    if (!compatible) throw new Error(`Versões compartilhadas incompatíveis: ${name}. Alinhe as dependências do shell e dos MFEs e repita o build.`);
  }
  console.log('Front desktop preparado em desktop/web.');
} catch (error) { console.error(error.message); process.exitCode = 1; }
