# Bill Makes Food

A personal blog for sharing a habit-first, mental model centric, systemic approach to home cooking.

**Live at:** (https://bill-makes-food.netlify.app/)

## Background

I make cooking content as a hobby and I'm a front-end engineer by trade. This project marries two things I love: cooking and coding.
I not only wanted an outlet for my writing, I wanted to demonstrate my take on a clean, organized, and slick website.

## Tech stack

- **[Astro](https://astro.build)**
- Plain HTML/CSS/JavaScript
- Self-hosted Montserrat via Astro's Fonts API
- Design tokens: CSS variables simplify styling allowing for seamless incorporation of color palette, type scaling, and consistent spacing.

## Why I built it this way

I chose to build this using Astro because it fits the shape of the project. This is a content site with very little interactivity and thus content-shaped, not app-shaped. Functionality also doesn't rely on state management (for now at least). Astro's multi-page, zero JS shipping by default, injecting JS when needed approach allows this site to load fast and index properly via SEO crawlers. Plus I can use Vue or React components via Astro's "islands" where interactivity calls for it. Bundling an entire front-end framework felt like overkill.

## Getting started

```bash
# Requires Node 24 (via nvm: nvm use 24)
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Project structure

tbd

## Roadmap / status

 - deployment
 - mobile navigation enhancements
 - content collections for recipes and blog posts
 - recipe tags and inter-site linking