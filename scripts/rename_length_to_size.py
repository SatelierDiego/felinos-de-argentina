import os, re

FELINOS_DIR = r"C:\dev\felinos-de-argentina\src\content\felinos"

for fname in os.listdir(FELINOS_DIR):
    if not fname.endswith(".md"):
        continue
    path = os.path.join(FELINOS_DIR, fname)
    with open(path, encoding="utf-8") as f:
        content = f.read()

    # 1. Rename length: → size:
    new_content = re.sub(r'^    length:$', '    size:', content, flags=re.MULTILINE)

    # 2. Add - alzada: after the last item in the size block
    #    Pattern: the size block ends before the next key (diet:)
    #    Insert "        - alzada:" before "    diet:"
    new_content = re.sub(
        r'((?:        - (?:body|tail): ".+"\n)+)(    diet:)',
        lambda m: m.group(1) + '        - alzada:\n' + m.group(2),
        new_content,
    )

    if new_content == content:
        print(f"[MISS] {fname}")
    else:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"[OK]   {fname}")
