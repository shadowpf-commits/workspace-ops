import zipfile, re, sys

z = zipfile.ZipFile('/Users/shadow/.openclaw/workspace/new_ppt.pptx')
slides = sorted([n for n in z.namelist() if 'ppt/slides/slide' in n and n.endswith('.xml')])

with open('/Users/shadow/.openclaw/workspace/slide_content.txt', 'w') as f:
    for i, s in enumerate(slides, 1):
        c = z.read(s).decode('utf-8')
        t = re.findall(r'<a:t>([^<]*)</a:t>', c)
        f.write(f'=== Slide {i} ===\n')
        f.write(' | '.join(t) + '\n\n')

print('Done')
