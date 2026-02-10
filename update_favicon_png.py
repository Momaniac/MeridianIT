import os
import re

FILES = [
    "index.html", "institute.html", "programs.html", 
    "certifications.html", "experience.html", "careers.html", "admissions.html", "sitemap.html", "privacy.html"
]

def update_favicon_png(filename):
    print(f"Updating favicon to PNG in {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Target: <link rel="icon" href="assets/meridian-logo-tab.svg" type="image/svg+xml">
    # Replacement: <link rel="icon" href="assets/meridian-logo-tab.png" type="image/png">
    
    # We use regex to be safe about attributes order or whitespace
    # Pattern looks for <link rel="icon" ...> tag
    
    # First, let's try a direct replacement of the file extension and type if the structure matches what we just implemented
    content = content.replace('href="assets/meridian-logo-tab.svg"', 'href="assets/meridian-logo-tab.png"')
    content = content.replace('type="image/svg+xml"', 'type="image/png"')
    
    # Backup: in case it was the old placehold favicon.png but type was png... 
    # Actually we know it's currently svg from previous step.
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Updated {filename}")

if __name__ == "__main__":
    for file in FILES:
        if os.path.exists(file):
            update_favicon_png(file)
        else:
            print(f"Skipping {file} (not found)")
