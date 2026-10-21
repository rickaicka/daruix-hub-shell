import { existsSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const require = createRequire(join(root, 'package.json'));
const ng = require.resolve('@angular/cli/bin/ng.js');
const result = spawnSync(process.execPath, [ng, 'build', '--configuration=production'], {
  cwd: root,
  stdio: 'inherit',
});
if (result.error) {
  console.error('Não foi possível iniciar o build do Shell:', result.error.message);
  process.exit(1);
}
if (result.status !== 0) process.exit(result.status ?? 1);

const output = join(root, 'dist', 'daruix-hub-shell');
if (!existsSync(join(output, 'index.html'))) {
  console.error('Build do Shell não gerou dist/daruix-hub-shell/index.html.');
  process.exit(1);
}

// O build do Electron pode chamar os comandos do Shell por dentro de build:web.
// Nesse caso, o wrapper desktop já preparou os MFEs e preserva o empacotamento.
if (process.env.DARUIX_BUNDLE_REMOTES === '1') {
  console.log('Build empacotado: cópias locais dos MFEs preservadas.');
} else {
  // Remove somente artefatos de saída; public/remotes permanece disponível para
  // os próximos builds de Capacitor/Electron na máquina do desenvolvedor.
  rmSync(join(output, 'remotes'), { recursive: true, force: true });
  console.log('Build web concluído: somente Shell, sem cópias locais dos MFEs.');
}
