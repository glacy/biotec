import os
import re

SESSIONS_DIR = 'sessions'

def parse_file(filepath):
    """
    Parses a markdown file into (frontmatter_raw, body).
    frontmatter_raw includes the surrounding --- lines.
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for frontmatter
    if content.startswith('---\n'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter = f"---\n{parts[1]}---\n"
            body = parts[2]
            # Strip leading whitespace from body but preserve structure
            if body.startswith('\n'):
                body = body[1:]
            return frontmatter, body
    
    return None, content

def main():
    if not os.path.exists(SESSIONS_DIR):
        print(f"Directory {SESSIONS_DIR} not found.")
        return

    files = os.listdir(SESSIONS_DIR)
    
    # Group files by week number
    week_files = {}
    for f in files:
        if not f.endswith('.md'):
            continue
        match = re.match(r'^(\d{2})-', f)
        if match:
            week_num = int(match.group(1))
            if week_num not in week_files:
                week_files[week_num] = []
            week_files[week_num].append(f)

    # Process each week
    for week in sorted(week_files.keys()):
        candidates = week_files[week]
        if len(candidates) < 2:
            print(f"Week {week}: Only found {len(candidates)} file(s). Skipping merge (need 2).")
            continue
        
        # Sort by size: [Smallest (Metadata), Largest (Content)]
        # This assumes the generated file (frontmatter only) is smaller than the full content file.
        candidates_full = [(f, os.path.getsize(os.path.join(SESSIONS_DIR, f))) for f in candidates]
        candidates_full.sort(key=lambda x: x[1])
        
        metadata_file_name = candidates_full[0][0]
        content_file_name = candidates_full[-1][0]
        
        md_path = os.path.join(SESSIONS_DIR, metadata_file_name)
        cnt_path = os.path.join(SESSIONS_DIR, content_file_name)
        
        print(f"Week {week}: Merging...")
        print(f"  Metadata (New): {metadata_file_name} ({candidates_full[0][1]} bytes)")
        print(f"  Content (Old):  {content_file_name} ({candidates_full[-1][1]} bytes)")

        # Parse Metadata File (keep only frontmatter)
        new_fm, _ = parse_file(md_path)
        if not new_fm:
            print(f"  Error: Could not parse frontmatter from {metadata_file_name}")
            continue

        # Parse Content File (keep only body)
        _, old_body = parse_file(cnt_path)
        
        # Combine
        merged_content = f"{new_fm}\n{old_body}"
        
        # Determine target filename (Prefer the 'metadata_file_name' as it follows new naming convention)
        target_filename = metadata_file_name
        # If the metadata file had _1 suffix, strip it for the final name IF the other file is deleted
        if '_1.md' in target_filename:
             target_filename = target_filename.replace('_1.md', '.md')
        
        target_path = os.path.join(SESSIONS_DIR, target_filename)
        
        # Write merged file
        with open(target_path, 'w', encoding='utf-8') as f:
            f.write(merged_content)
        
        print(f"  Saved merged file to: {target_filename}")
        
        # Clean up
        # Remove the files we used if they are typically temporary or duplicates
        # Safest bet: remove the "old" content file (since its content is now in target)
        # AND remove the "new" metadata file (since its metadata is now in target)
        # Basically, remove all candidates except the target, OR if target is one of them, careful.
        
        files_to_remove = set(candidates)
        # If target filename matches one of the candidates, don't delete that one (we just wrote to it)
        # Actually, since we overwrote target_path, we just need to delete the OTHER candidates.
        
        if target_filename in files_to_remove:
            files_to_remove.remove(target_filename)
            
        for f_rem in files_to_remove:
            path_rem = os.path.join(SESSIONS_DIR, f_rem)
            if os.path.exists(path_rem):
                os.remove(path_rem)
                print(f"  Deleted old/duplicate: {f_rem}")
        
        # Special case: If target_filename WAS one of the candidates (e.g. metadata_file_name), it's already updated.
        # Check if we need to rename metadata_file_name (e.g. if it had _1) to target_filename (without _1).
        # In my logic above, I write directly to `target_path`.
        # If `metadata_file_name` was `03-foo_1.md` and `target_filename` is `03-foo.md`.
        # I write to `03-foo.md`.
        # Then `files_to_remove` includes `03-foo_1.md`. It gets deleted.
        # This seems correct.

if __name__ == "__main__":
    main()
