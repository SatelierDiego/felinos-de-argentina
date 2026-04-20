import os
import re

FELINOS_DIR = r"C:\dev\felinos-de-argentina\src\content\felinos"

files = [
    "gato-andino.md",
    "gato-montes.md",
    "guina.md",
    "margay.md",
    "ocelote.md",
    "puma.md",
    "tigrina.md",
    "tirica.md",
    "yaguarete.md",
]

FIELDS = "\n    habits:\n    activity:\n    generationTime:"

for fname in files:
    path = os.path.join(FELINOS_DIR, fname)
    with open(path, encoding="utf-8") as f:
        content = f.read()

    # Insert after the habitat: line, before the blank line + sections:
    new_content = re.sub(
        r'(    habitat: ".+?")\n(\nsections:)',
        lambda m: m.group(1) + FIELDS + "\n" + m.group(2),
        content,
    )

    if new_content == content:
        print(f"[MISS] {fname}")
    else:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"[OK]   {fname}")
