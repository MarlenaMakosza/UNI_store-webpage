#!/usr/bin/env bash
# Converts jpg/jpeg/png to WebP (quality 80), deletes originals.
# Run from project root: bash convert-to-webp.sh
# Add --dry-run flag to preview without changes.

set -euo pipefail

QUALITY=80
DRY_RUN=false

if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "[dry-run] no files will be changed"
fi

CONVERTED=0
SKIPPED=0
TOTAL_SAVED=0

while IFS= read -r -d '' file; do
  webp_file="${file%.*}.webp"

  if [[ -f "$webp_file" ]]; then
    echo "skip (webp exists): $file"
    ((SKIPPED++)) || true
    continue
  fi

  original_size=$(stat -c%s "$file")

  if $DRY_RUN; then
    echo "[dry-run] would convert: $file → $webp_file"
    ((CONVERTED++)) || true
    continue
  fi

  magick "$file" -quality $QUALITY "$webp_file"
  new_size=$(stat -c%s "$webp_file")
  saved=$(( original_size - new_size ))
  TOTAL_SAVED=$(( TOTAL_SAVED + saved ))

  echo "converted: $file → $webp_file (saved $(( saved / 1024 ))KB)"
  rm "$file"
  ((CONVERTED++)) || true

done < <(find . \
  -not -path "./.git/*" \
  -type f \
  \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
  -print0)

echo ""
echo "done: $CONVERTED converted, $SKIPPED skipped"
if ! $DRY_RUN; then
  echo "total saved: $(( TOTAL_SAVED / 1024 / 1024 ))MB"
fi
