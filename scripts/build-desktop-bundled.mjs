import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const npm = process.env.npm_execpath;
if (!npm) {
  console.error('Execute este script por npm run desktop:build.');
  process.exit(1);
}

const env = { ...process.env, DARUIX_BUNDLE_REMOTES: '1' };
for (const args of [
  ['run', 'build:mfes'],
  ['run', 'sync:mfes'],
  ['--prefix', 'desktop', 'run', 'build:web'],
]) {
  const result = spawnSync(process.execPath, [npm, ...args], {
    cwd: root, env, stdio: 'inherit',
  });
  if (result.error) {
    console.error('Não foi possível executar o build desktop:', result.error.message);
    process.exit(1);
  }
  if (result.status !== 0) process.exit(result.status ?? 1);
}
