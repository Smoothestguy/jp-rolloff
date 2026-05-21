#!/usr/bin/env python3
"""
One-shot path converter: rewrites absolute paths (/css/foo.css, /services, etc.)
to relative paths so the site renders correctly when opened via file:// in a
preview pane or directly in a browser without a web server.

Run once after the initial scaffold:
    cd ~/Desktop/JP-Rolloff && python3 convert-paths-for-local.py

After running, you can delete this file — the paths will work locally AND on
Vercel/Netlify (since the files exist with .html extensions).
"""
import os
from pathlib import Path

ROOT = Path(__file__).parent

ROOT_FILES = ['index.html', 'about.html', 'services.html', 'pricing.html',
              'service-areas.html', 'contact.html', 'faq.html', '404.html']

CITIES = ['beltsville', 'greenbelt', 'college-park', 'laurel', 'hyattsville',
          'bowie', 'silver-spring', 'takoma-park', 'riverdale', 'landover',
          'upper-marlboro', 'lanham', 'bladensburg', 'cheverly', 'rockville']

SIZES = ['10-yard-dumpster', '15-yard-dumpster', '20-yard-dumpster',
         '25-yard-dumpster', '30-yard-dumpster']

# top-level pages other than the size/city deep pages
PAGES = ['service-areas', 'services', 'pricing', 'about', 'contact', 'faq',
         'privacy', 'terms']


def convert(text: str, prefix: str) -> str:
    """Rewrite absolute paths to relative (prefix is '' for root, '../' for nested)."""
    # Asset paths
    text = text.replace('href="/css/',         f'href="{prefix}css/')
    text = text.replace('src="/js/',           f'src="{prefix}js/')
    text = text.replace('href="/favicon.svg"', f'href="{prefix}favicon.svg"')

    # Deep paths FIRST (so /services/X-yard-dumpster gets matched before /services)
    for size in SIZES:
        text = text.replace(
            f'href="/services/{size}"',
            f'href="{prefix}services/{size}.html"'
        )
    for city in CITIES:
        text = text.replace(
            f'href="/locations/{city}"',
            f'href="{prefix}locations/{city}.html"'
        )

    # Top-level pages — service-areas before services in the list
    for page in PAGES:
        text = text.replace(f'href="/{page}"', f'href="{prefix}{page}.html"')

    # Special: anchor on the homepage
    text = text.replace('href="/#quote"', f'href="{prefix}index.html#quote"')

    # Brand link — must be last because it matches the most generic pattern
    text = text.replace('<a href="/"', f'<a href="{prefix}index.html"')

    return text


def process(path: Path, prefix: str) -> bool:
    if not path.exists():
        return False
    content = path.read_text(encoding='utf-8')
    new = convert(content, prefix)
    if new != content:
        path.write_text(new, encoding='utf-8')
        return True
    return False


def main():
    print(f'Converting paths in {ROOT}\n')
    changed = 0

    # Root pages
    for filename in ROOT_FILES:
        if process(ROOT / filename, prefix=''):
            print(f'  fixed  {filename}')
            changed += 1

    # services/* (one level deep)
    for size in SIZES:
        path = ROOT / 'services' / f'{size}.html'
        if process(path, prefix='../'):
            print(f'  fixed  services/{size}.html')
            changed += 1

    # locations/* (one level deep)
    for city in CITIES:
        path = ROOT / 'locations' / f'{city}.html'
        if process(path, prefix='../'):
            print(f'  fixed  locations/{city}.html')
            changed += 1

    print(f'\nDone. {changed} files updated.')
    print('Open any .html file directly in a browser — styles will load.')
    print('You can delete this script now; the changes are permanent.')


if __name__ == '__main__':
    main()
