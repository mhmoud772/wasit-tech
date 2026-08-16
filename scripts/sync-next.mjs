import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'src', 'components');
const outDir = join(root, 'components');

if (!existsSync(srcDir)) {
  console.error('src/components not found, aborting sync.');
  process.exit(1);
}

function transform(content) {
  let out = content;
  // Config import must resolve to the shared src/config module
  out = out.replaceAll("from '../config'", "from '../src/config'");
  // Every component is interactive/client-rendered in the Next.js app router
  if (!out.startsWith("'use client';")) {
    out = "'use client';\n\n" + out;
  }
  return out;
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const p = join(dir, entry.name);
    return entry.isDirectory() ? walk(p) : [p];
  });
}

mkdirSync(outDir, { recursive: true });
const files = walk(srcDir).filter((f) => f.endsWith('.tsx'));
let count = 0;

for (const file of files) {
  const rel = relative(srcDir, file);
  const dest = join(outDir, rel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, transform(readFileSync(file, 'utf8')));
  count += 1;
}

console.log(`Synced ${count} component file(s) from src/components -> components/`);
