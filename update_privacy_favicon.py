import os
import re

FILES = [
    "index.html", "institute.html", "programs.html", 
    "certifications.html", "experience.html", "careers.html", "admissions.html", "sitemap.html"
]

def update_files(filename):
    print(f"Updating {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Favicon
    # Find <link rel="icon" ...> and replace href with assets/meridian-logo-tab.svg and type with image/svg+xml
    content = re.sub(
        r'<link rel="icon"[^>]*?>', 
        '<link rel="icon" href="assets/meridian-logo-tab.svg" type="image/svg+xml">', 
        content
    )

    # 2. Add Privacy Link to Footer (if not present)
    # Target: <div class="footer-bottom">
    # We want to insert the Privacy link before social links or after copyright.
    # Pattern: <div class="footer-bottom">\s*<p>&copy; 2026 ...</p> -> Insert after this paragraph
    
    privacy_link_html = """
                <div class="footer-legal-links" style="margin-left: auto; margin-right: 2rem;">
                    <a href="privacy.html" style="color: #64748b; font-size: 0.85rem; margin-right: 1rem;">Aviso de Privacidad</a>
                </div>"""
                
    if 'href="privacy.html"' not in content:
        # Avoid double adding in privacy.html itself if script runs there (it has it manually added, so should be fine)
        if filename != "privacy.html":
             # Regex to find the copyright paragraph
            pattern = re.compile(r'(<p>&copy; 2026 Meridian Institute of Technology\. Todos los derechos reservados\.</p>)')
            if pattern.search(content):
                content = pattern.sub(r'\1' + privacy_link_html, content)
                # Note: This might mess up the fluxbox slightly if display:flex isn't handled.
                # The footer-bottom is flex space-between. 
                # Currently: p (left), social-links (right).
                # Inserting a div in middle usually works with space-between (left, center, right).
                # Let's hope it looks good. If not, we adjust.

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Updated {filename}")

if __name__ == "__main__":
    for file in FILES:
        if os.path.exists(file):
            update_files(file)
        else:
            print(f"Skipping {file} (not found)")
