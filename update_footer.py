import os

FILES = [
    "index.html", "institute.html", "programs.html", 
    "certifications.html", "experience.html", "careers.html", "admissions.html"
]

def update_footer(filename):
    print(f"Updating footer in {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Target: <li><a href="partners.html">Partners</a></li>
    # Replacement: <li><a href="sitemap.html">Mapa del Sitio</a></li>
    
    # We use a simple Replace because the string is unique enough in the footer context
    old_link = '<li><a href="partners.html">Partners</a></li>'
    new_link = '<li><a href="sitemap.html">Mapa del Sitio</a></li>'
    
    if old_link in content:
        content = content.replace(old_link, new_link)
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Updated {filename}")
    else:
        print(f"⚠️ 'Partners' link not found in {filename} (or already updated)")

if __name__ == "__main__":
    for file in FILES:
        if os.path.exists(file):
            update_footer(file)
        else:
            print(f"Skipping {file} (not found)")
