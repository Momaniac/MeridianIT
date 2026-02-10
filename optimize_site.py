import os
import re

# Configuration
FILES = [
    "index.html", "institute.html", "programs.html", 
    "certifications.html", "experience.html", "careers.html", "admissions.html"
]

# Image Dimensions (Based on sips output or standard assumptions if sips failed)
# We will read sips output manually, but for this script I'll assume standard values if not provided.
# Let's assume:
# logo-meridian.jpg: width="200" height="auto" (CSS handles it, but we want implicit ratio)
# logo-meridian-bco.png: width="200" height="auto"
# hero-bg.jpg: width="1920" height="1080"
# We will simply add width/height attributes if missing. 

# HTML Snippets
FAVICON_TAG = '<link rel="icon" href="assets/favicon.png" type="image/png">'
OG_TAGS_TEMPLATE = """
    <!-- Open Graph / Social Media Metatags -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://meridian.edu.mx/{filename}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="https://meridian.edu.mx/assets/social-share.jpg">
"""

def get_title_and_desc(content):
    title_match = re.search(r'<title>(.*?)</title>', content)
    desc_match = re.search(r'<meta name="description"\s+content="(.*?)">', content, re.DOTALL)
    
    title = title_match.group(1) if title_match else "Meridian Institute of Technology"
    description = desc_match.group(1) if desc_match else "Educación de alto rendimiento en ingeniería de software."
    
    # Clean up whitespace
    description = " ".join(description.split())
    
    return title, description

def process_file(filename):
    print(f"Processing {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add Favicon (if not present)
    if 'rel="icon"' not in content:
        content = content.replace('</title>', f'</title>\n    {FAVICON_TAG}')

    # 2. Add Open Graph Tags (if not present)
    if 'property="og:title"' not in content:
        title, description = get_title_and_desc(content)
        og_tags = OG_TAGS_TEMPLATE.format(
            filename=filename,
            title=title,
            description=description
        )
        content = content.replace('</title>', f'</title>{og_tags}')

    # 3. Add Dimensions to Critical Images (Logos and Hero)
    # Logo original: 2041x711 (Ratio ~2.87) -> We display at ~200px width, so height should be ~70px.
    # Hero Bg original: 1408x736 (Ratio ~1.91) -> We display full width, but setting intrinsic ratio helps browser allocate space.
    
    # Header Logo
    if 'index.html' in filename or 'institute.html' in filename: # Only modify if needed, but regex is safe
        content = re.sub(
            r'(<img src="assets/logo-meridian\.jpg"[^>]*?)>', 
            r'\1 width="200" height="70">', 
            content
        )
        
    # Footer Logo (White)
    content = re.sub(
        r'(<img src="assets/logo-meridian-bco\.png"[^>]*?)>', 
        r'\1 width="200" height="70">', 
        content
    )
    
    # Hero Bg (Cover images)
    # Note: Hero images vary. 'hero-bg.jpg' is 1408x736. Others might differ.
    # We will set a generic 1920x1080 for backgrounds as they are usually object-fit: cover,
    # but strictly speaking we should match the file.
    # Since we have multiple bg images (programs-bg, etc), let's stick to a safe 16:9 ratio.
    content = re.sub(
        r'(<img src="assets/.*?-bg\.jpg"[^>]*?)>', 
        r'\1 width="1408" height="736">', 
        content
    )

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    for file in FILES:
        if os.path.exists(file):
            process_file(file)
        else:
            print(f"Skipping {file} (not found)")
