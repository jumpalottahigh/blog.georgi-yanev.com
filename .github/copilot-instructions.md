# Copilot Instructions for blog.georgi-yanev.com

## Project Overview

- This is a personal blog built with **Gatsby** (React-based static site generator) and hosted on **Netlify**.
- Content is organized in the `content/` directory (e.g., `fpv-news/`, `posts/`, `quick-tips/`, `reader-questions/`).
- Source code lives in `src/` with subfolders for `components/`, `hooks/`, `pages/`, `templates/`, and `assets/`.
- Static files and images are in `static/` and `src/images/`.

## Key Workflows

- **Install dependencies:** `npm install`
- **Local development:** `npm run dev` (starts Gatsby dev server)
- **Build for production:** `npm run build`
- **Deploy:** Automated via Netlify (see badge in README)

## Architectural Patterns

- **Pages:** Located in `src/pages/`, each file exports a React component for a route.
- **Templates:** Used for dynamic content (e.g., blog posts) in `src/templates/`.
- **Components:** Shared UI elements in `src/components/`.
- **Gatsby Node APIs:** Custom logic in `gatsby-node.js` (e.g., dynamic page creation).
- **Config:** Site-wide settings in `gatsby-config.js`.

## Conventions & Patterns

- **Content Markdown:** Blog posts and articles are written in Markdown and stored in `content/`.
- **Images:** Use relative paths for images in Markdown; store images in `src/images/` or `static/`.
- **Styling:** Follows Gatsby/React conventions; check for CSS-in-JS or global styles in `src/assets/`.
- **Data Flow:** Gatsby GraphQL is used for querying site data and content.
- **Naming:** Use descriptive, kebab-case for content folders and files.

## Integration Points

- **Netlify:** Handles deployment and hosting; `_headers` and `_redirects` in `public/` for custom rules.
- **External Links:** Social links and badges in README; update as needed.
- **Gatsby Plugins:** Managed in `gatsby-config.js`.

## Examples

- To add a new blog post: create a Markdown file in `content/posts/` and add any images to `src/images/`.
- To create a new page: add a React component to `src/pages/`.
- To customize build/deploy: edit `gatsby-node.js` or Netlify config files in `public/`.

## References

- See `README.md` for setup and social links.
- See `gatsby-config.js` and `gatsby-node.js` for build and site configuration.
- See `src/components/` for reusable UI patterns.

---

_If any section is unclear or missing, please provide feedback to improve these instructions._
