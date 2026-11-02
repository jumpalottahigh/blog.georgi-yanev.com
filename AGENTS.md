# AGENTS.md

Personal blog built with **Gatsby 5** (React 18), deployed to **Netlify**.

## Setup & commands

- Node version is pinned in `.nvmrc` — run `nvm use` first.
- `npm install` — install dependencies
- `npm run dev` — local dev server (`gatsby develop`)
- `npm run build` — production build; **use this to verify changes** (there are no tests, `npm test` just exits with an error)
- `npm run lint` — ESLint 9 flat config (`eslint.config.js`)
- `npm run format` — Prettier on `src/`
- `npm run clean` — remove `.cache/` and `public/` if the build behaves oddly

## Code style

- Prettier (`.prettierrc`): no semicolons, single quotes, ES5 trailing commas.
- Styling uses **styled-components** plus global CSS in `src/components/structure/` (`index.css`, `darkmode.css`). Theme state lives in `src/context/ThemeContext.js`.

## Project layout

- `content/` — Markdown content, one folder per article (`YYYY-MM-DD-slug/index.md`) with its images alongside:
  - `posts/<category>/` (fpv, learning, projects, smart-home, stories)
  - `quick-tips/`, `fpv-news/`, `reader-questions/`
- `src/pages/` — file-based routes (including `eternal-archives/` and `videos/`).
- `src/templates/` — `blog-post.js`, `quick-tip.js`, `fpv-news.js`.
- `src/components/` — shared UI; layout, header and footer in `src/components/structure/`.
- `src/hooks/` — static-query hooks (e.g. `use-allmarkdown.js`).
- `src/assets/pages/` — images sourced into GraphQL (`images` filesystem source).
- `static/` — copied as-is to the site root (`_redirects`, `robots.txt`, `ads.txt`, verification files).
- `gatsby-node.js` — `createPages` for posts, quick tips and FPV news, keyed on frontmatter `path`.
- `gatsby-config.js` — plugins (remark pipeline, feed, sitemap, manifest, Netlify headers).
- `public/` and `.cache/` are build output — never edit them.

## Adding content

Create `content/posts/<category>/YYYY-MM-DD-slug/index.md` and put images in the same folder, referenced with relative paths. Frontmatter:

```yaml
---
path: '/<category>/<slug>/'
date: 'YYYY-MM-DD'
title: '...'
author: 'Georgi Yanev'
draft: false # true excludes the post from page creation
category: '<category>'
tags:
  - '...'
ogKeywords: '...'
ogDescription: '...'
ogImage: './image.jpg'
---
```

Quick tips and FPV news need at least `path`, `date` and `title`.

## Deployment

Hosted on Netlify; `npm run deploy` does a manual production deploy via the Netlify CLI. Redirects go in `static/_redirects`. Custom headers are set in `gatsby-config.js` (`gatsby-plugin-netlify` options), not in a `_headers` file.
