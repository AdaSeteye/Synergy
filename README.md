# Synergy Steelcraft

A premium industrial website for **Synergy Steelcraft** — stainless steel water tanks, handrails, shelves, tables and custom fabrications, with considerate service.

## Overview

- **Single-page** layout with smooth scrolling
- **Sections**: Hero, About, Products, Service, Contact
- **Style**: Modern industrial — dark theme, metallic accents (gold/amber), strong typography (Bebas Neue + Inter)
- **Responsive**: Mobile-friendly with a slide-out navigation menu on small screens

## Run locally

1. Open `index.html` in a browser, or
2. Use a local server, e.g.:
   - `npx serve .`
   - Python: `python -m http.server 8000` then visit `http://localhost:8000`

## Customization

- **Contact form**: The form currently shows a “Message sent” state only. Hook it up to your backend or a service like [Formspree](https://formspree.io) by changing the `form` `action` and optionally removing the `e.preventDefault()` in `script.js`.
- **Email/phone**: Update the placeholders in the Contact section in `index.html` with your real details.
- **Images**: Replace the product icon placeholders with real photos by adding `<img>` inside each `.product-image` and adjusting `styles.css` as needed.

## Files

- `index.html` — structure and content
- `styles.css` — layout and industrial theme
- `script.js` — nav toggle, smooth scroll, form placeholder, footer year
