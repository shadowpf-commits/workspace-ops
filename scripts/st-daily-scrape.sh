#!/bin/bash
# Sensor Tower Daily Scrape — runs at 11 AM Asia/Shanghai
# Scrapes available ST API endpoints and saves to memory

DATE=$(date +%Y-%m-%d)
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S %Z")
OUTPUT_DIR="/Users/shadow/.openclaw/workspace/memory/st-daily"
TOKEN="ST0_KV4BDsfT_Lj7szoxnhBg3xZ"
BASE_URL="https://app.sensortower-china.com/api"
MEMORY_FILE="$OUTPUT_DIR/${DATE}.md"

mkdir -p "$OUTPUT_DIR"

echo "=== Sensor Tower Daily Scrape ===" 
echo "Timestamp: $TIMESTAMP"
echo "Date: $DATE"

# 1. Game taxonomy stats (category-level downloads/revenue)
echo "Fetching game_taxonomy/stats..."
TAX_STATS=$(curl -s -H "Authorization: Token $TOKEN" "$BASE_URL/game_taxonomy/stats")
echo "$TAX_STATS" > "$OUTPUT_DIR/${DATE}_taxonomy_stats.json"

# 2. IP media type hierarchy
echo "Fetching game_taxonomy/ip_media_type_hierarchy..."
IP_MEDIA=$(curl -s -H "Authorization: Token $TOKEN" "$BASE_URL/game_taxonomy/ip_media_type_hierarchy")
echo "$IP_MEDIA" > "$OUTPUT_DIR/${DATE}_ip_media.json"

# 3. Internal entities (apps + publishers)
echo "Fetching unified/internal_entities..."
INTERNAL=$(curl -s -H "Authorization: Token $TOKEN" "$BASE_URL/unified/internal_entities")
echo "$INTERNAL" > "$OUTPUT_DIR/${DATE}_internal_entities.json"

# 4. Generate daily summary using Python
echo "Generating daily summary..."
python3 << PYEOF
import json
import os
from datetime import datetime

DATE = "$DATE"
OUTPUT_DIR = "$OUTPUT_DIR"

summary_lines = []
summary_lines.append(f"=== Sensor Tower Daily Summary — {DATE} ===")
summary_lines.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
summary_lines.append("")

# Parse taxonomy stats
try:
    with open(f"{OUTPUT_DIR}/{DATE}_taxonomy_stats.json") as f:
        data = json.load(f)
    cats = data.get('data', {})
    
    # Get top categories by unified downloads
    cat_downloads = []
    for cat_id, platforms in cats.items():
        unified = platforms.get('unified', 0)
        if unified > 100000:
            cat_downloads.append((cat_id, unified))
    
    cat_downloads.sort(key=lambda x: x[1], reverse=True)
    summary_lines.append("## Top Categories by Downloads (Unified)")
    for cat_id, downloads in cat_downloads[:15]:
        summary_lines.append(f"  {cat_id}: {downloads:,}")
except Exception as e:
    summary_lines.append(f"taxonomy_stats parse error: {e}")

summary_lines.append("")

# Parse IP media hierarchy  
try:
    with open(f"{OUTPUT_DIR}/{DATE}_ip_media.json") as f:
        data = json.load(f)
    ips = data.get('data', [])
    summary_lines.append("## IP Types by App Count")
    for category in ips:
        name = category.get('name', 'Unknown')
        count = category.get('count', 0)
        summary_lines.append(f"  {name}: {count} apps")
except Exception as e:
    summary_lines.append(f"ip_media parse error: {e}")

summary_lines.append("")

# Parse internal entities
try:
    with open(f"{OUTPUT_DIR}/{DATE}_internal_entities.json") as f:
        data = json.load(f)
    apps = data.get('apps', {})
    publishers = data.get('publishers', {})
    summary_lines.append(f"## Internal Entities")
    summary_lines.append(f"  Apps tracked: {len(apps)}")
    summary_lines.append(f"  Publishers: {len(publishers)}")
except Exception as e:
    summary_lines.append(f"internal_entities parse error: {e}")

summary_lines.append("")
summary_lines.append("=== End of Summary ===")

content = '\n'.join(summary_lines)
print(content)

# Also save to memory file
with open(f"{OUTPUT_DIR}/{DATE}.md", 'w') as f:
    f.write(content)
print(f"\nSaved to {OUTPUT_DIR}/{DATE}.md")
PYEOF

echo ""
echo "Scrape complete."
echo ""
echo "=== Daily Summary ==="
cat "$MEMORY_FILE"
echo ""
echo "=== DONE: $TIMESTAMP ==="
