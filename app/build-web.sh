#!/usr/bin/env bash
# Exports the app as a static web build and drops it into the site at /app.
# Run from the repo root: ./app/build-web.sh
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root/app"

rm -rf dist
npx expo export --platform web --output-dir dist

rm -rf "$root/docs/app"
cp -R dist "$root/docs/app"

# The test build should stay out of search, like the rest of the site.
python3 - "$root/docs/app/index.html" <<'PY'
import pathlib, sys
p = pathlib.Path(sys.argv[1]); s = p.read_text()
tag = '<meta name="robots" content="noindex, nofollow">'
if tag not in s:
    p.write_text(s.replace('<head>', '<head>\n' + tag, 1))
PY

echo "Exported to docs/app — commit and push to publish."
