import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const url = process.argv[2] || 'http://localhost:4321';
const normalizedUrl = url.startsWith('http') ? url : `http://${url}`;

const args = [
  normalizedUrl,
  '--output=html',
  '--output-path=./lighthouse-reports/report-view.html',
  '--view',
  '--chrome-flags=--headless --no-sandbox --enable-logging=stderr',
];

const child = spawn('lighthouse', args, {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});
