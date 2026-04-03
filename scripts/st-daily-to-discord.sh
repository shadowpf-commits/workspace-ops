#!/bin/bash
# Sensor Tower Daily Report → Discord
# Usage: run after st-daily-scrape.sh

DATE=$(date +%Y-%m-%d)
OUTPUT_DIR="/Users/shadow/.openclaw/workspace/memory/st-daily"
MEMORY_FILE="$OUTPUT_DIR/${DATE}.md"

if [ ! -f "$MEMORY_FILE" ]; then
    echo "No ST data for today yet"
    exit 1
fi

# Read the summary and format for Discord
SUMMARY=$(cat "$MEMORY_FILE")

# Format as Discord message
python3 << 'PYEOF'
import sys
import os

date_str = os.environ.get('DATE', '')
memory_file = os.environ.get('MEMORY_FILE', '')

with open(memory_file, 'r') as f:
    content = f.read()

# Parse and format for Discord
lines = content.split('\n')

output_lines = []
output_lines.append(f"📊 **Sensor Tower 日报 — {date_str}**")
output_lines.append("")
output_lines.append("**Top 品类下载 (Unified):**")

import re
in_categories = False
count = 0
for line in lines:
    if '## Top Categories' in line:
        in_categories = True
        continue
    if in_categories and line.startswith('## '):
        break
    if in_categories and line.strip() and not line.startswith('==='):
        # Parse "  5080: 2,139,184"
        match = re.match(r'\s+(\d+):\s+([\d,]+)', line)
        if match and count < 5:
            cat_id = match.group(1)
            downloads = match.group(2)
            # Map common category IDs to names
            cat_names = {
                '5080': 'Action RPG',
                '6010': 'RPG',
                '1000010': 'Multiplayer',
                '3000040': 'Adventure',
                '2000040': 'Simulation RPG',
                '2000060': 'Strategy RPG',
                '6030': 'MMO',
                '5090': 'Board RPG',
                '1000': 'Games',
                '3000030': 'Action Adventure',
            }
            name = cat_names.get(cat_id, f'Cat {cat_id}')
            output_lines.append(f"  {name}: {downloads}")
            count += 1

output_lines.append("")
output_lines.append("**IP 类型分布:**")

in_ip = False
count = 0
for line in lines:
    if '## IP Types' in line:
        in_ip = True
        continue
    if in_ip and line.startswith('## '):
        break
    if in_ip and line.strip() and not line.startswith('==='):
        match = re.match(r'\s+(.+?):\s+(\d+)\s+apps?', line)
        if match and count < 5:
            output_lines.append(f"  {match.group(1)}: {match.group(2)} apps")
            count += 1

output_lines.append("")
output_lines.append("_ST 自动日报_")

print('\n'.join(output_lines))
PYEOF
