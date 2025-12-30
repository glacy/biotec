#!/usr/bin/env python3
import glob
import sys
import yaml
import re

print("Validación estricta de frontmatter (YAML)...")

required_fields = [
    "title",
    "session.number",
    "learning_objectives",
    "keywords",
    "subtitle"
]

status = 0

def get_nested(data, path):
    keys = path.split('.')
    val = data
    for key in keys:
        if isinstance(val, dict) and key in val:
            val = val[key]
        else:
            return None
    return val

files = sorted(glob.glob("sessions/*.md"))

for file_path in files:
    print(f"→ {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
        if not match:
            print("  ✗ Sin frontmatter")
            status = 1
            continue
            
        frontmatter_str = match.group(1)
        try:
            frontmatter = yaml.safe_load(frontmatter_str)
        except yaml.YAMLError as e:
            print(f"  ✗ YAML inválido: {e}")
            status = 1
            continue
            
        if not isinstance(frontmatter, dict):
            print("  ✗ Frontmatter no es un diccionario")
            status = 1
            continue

        # Validar campos requeridos
        for field in required_fields:
            if get_nested(frontmatter, field) is None:
                print(f"  ✗ Falta campo obligatorio: .{field}")
                status = 1

    except Exception as e:
        print(f"  ✗ Error leyendo archivo: {e}")
        status = 1

if status == 0:
    print("✔ Frontmatter válido en todas las sesiones")
    sys.exit(0)
else:
    print("✗ Errores detectados en el frontmatter")
    sys.exit(1)
