import os
import re

FILES = [
    "index.html", "institute.html", "programs.html", 
    "certifications.html", "experience.html", "careers.html", "admissions.html"
]

def fix_logos(filename):
    print(f"Fixing logos in {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find the logo tags with the added dimensions and strip them.
    # Looking for: <img src="assets/logo-meridian.jpg" ... width="200" height="70">
    # We want to keep src, alt, class, etc., but remove width and height.
    
    # Header Logo
    # Pattern: match img tag with src logo-meridian.jpg, capture everything else, remove width/height
    # Simplest way: just remove the specific string ' width="200" height="70"' if it exists next to the logo.
    
    content = content.replace(' src="assets/logo-meridian.jpg" alt="Meridian Institute of Technology Logo" width="200" height="70"', ' src="assets/logo-meridian.jpg" alt="Meridian Institute of Technology Logo"')
    
    # Footer Logo
    content = content.replace(' src="assets/logo-meridian-bco.png" alt="Meridian Institute of Technology Logo" class="footer-logo" width="200" height="70"', ' src="assets/logo-meridian-bco.png" alt="Meridian Institute of Technology Logo" class="footer-logo"')
    content = content.replace(' src="assets/logo-meridian-bco.png" alt="Meridian Logo" class="footer-logo" width="200" height="70"', ' src="assets/logo-meridian-bco.png" alt="Meridian Logo" class="footer-logo"')

    # Just in case the order or spacing is slightly different (regex backup)
    # Remove width/height from specifically named logo files
    content = re.sub(r'(src="assets/logo-meridian\.jpg"[^>]*?)\s+width="\d+"\s+height="\d+"', r'\1', content)
    content = re.sub(r'(src="assets/logo-meridian-bco\.png"[^>]*?)\s+width="\d+"\s+height="\d+"', r'\1', content)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    for file in FILES:
        if os.path.exists(file):
            fix_logos(file)
        else:
            print(f"Skipping {file} (not found)")
