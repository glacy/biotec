
import os
import re

def update_myst():
    myst_path = '/home/glacy/biotec/myst.yml'
    eval_dir = '/home/glacy/biotec/evaluations'
    
    # Check if files exist
    if not os.path.exists(myst_path):
        print(f"Error: {myst_path} not found.")
        return

    with open(myst_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    eval_files = sorted([f for f in os.listdir(eval_dir) if f.endswith('.md')])
    
    # Map week number to evaluation filename
    week_map = {}
    for fname in eval_files:
        try:
            num = int(fname[:2])
            week_map[num] = fname
        except:
            pass
            
    # Logic: Scan to find insertion points.
    insertions = [] # List of (line_index_to_insert_after, text_to_insert)
    
    current_week = None
    last_file_line = -1
    
    for idx, line in enumerate(lines):
        # 1. Detect new "Semana X" (Week Header)
        ws_match = re.search(r'^\s*-\s*title:\s*Semana\s*(\d+)', line)
        if ws_match:
            # If we were processing a previous week, insert content for it NOW.
            if current_week is not None and current_week in week_map:
                # We insert AFTER the last file of the PREVIOUS week.
                indent = "      "
                text = f"{indent}- file: evaluations/{week_map[current_week]}\n{indent}  hidden: true\n"
                insertions.append((last_file_line, text))
            
            # Start tracking new week
            current_week = int(ws_match.group(1))
            last_file_line = idx # Fallback if no files found
            
        # 2. Detect End of Table of Contents ("site:" or similar top-level key)
        elif re.match(r'^site:', line):
            if current_week is not None and current_week in week_map:
                indent = "      "
                text = f"{indent}- file: evaluations/{week_map[current_week]}\n{indent}  hidden: true\n"
                insertions.append((last_file_line, text))
            current_week = None
            
        # 3. Detect File entry (children)
        # We want to track the LAST file entry in the current week to append after it.
        elif re.search(r'^\s*-\s*file:', line):
            if current_week is not None:
                last_file_line = idx

    print(f"Found {len(insertions)} evaluations to insert.")

    # Apply insertions in reverse order to preserve indices
    insertions.sort(key=lambda x: x[0], reverse=True)
    
    for line_idx, text in insertions:
        lines.insert(line_idx + 1, text)
        
    with open(myst_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Updated myst.yml with evaluations.")

if __name__ == "__main__":
    update_myst()
