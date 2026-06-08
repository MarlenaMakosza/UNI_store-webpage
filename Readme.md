# TechNest — Electronics Store

A university project. A fictional electronics e-commerce storefront — full frontend with no backend or database.

## Tech stack

| Technology | Role |
|---|---|
| [Deno](https://deno.land/) | Runtime (instead of Node.js) |
| [Fresh 1.7](https://fresh.deno.dev/) | Fullstack framework — SSR + islands architecture |
| [Preact](https://preactjs.com/) | UI (lightweight React alternative, 3KB) |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styling |
| TypeScript | Everywhere |

## Features

- Home page with product listing
- Product catalog with category filtering
- Product detail page with image gallery
- Blog (text articles and infographics)
- Info pages: shipping, payments, contact, terms, privacy policy

Product and article data stored statically in `data/`.

## Running locally

Requirements: [Deno](https://deno.land/#installation) 1.40+

```bash
deno task dev
```

App available at `http://localhost:8000`.

## Other commands

```bash
deno task build    # production build
deno task start    # run production build
deno task check    # format + lint + type check
```

## Project structure

```
routes/       # pages (Fresh file-based routing)
components/   # shared UI components
islands/      # interactive components (Preact on client)
data/         # static product and article data
static/       # images and styles
```

## Note on AI assistance

Parts of this project were developed with the assistance of AI tools (Claude by Anthropic). All code was reviewed, understood, and integrated by the author.
