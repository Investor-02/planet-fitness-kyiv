# Planet Fitness Kyiv

Official-looking website MVP for Planet Fitness Kyiv, built from public and authenticated Instagram profile content supplied in the browser session.

## Stack

- React + TypeScript for a structured single page application with real routes.
- Vite for a fast static build that works well on GitHub Pages.
- Tailwind CSS v4 plugin is installed for the utility pipeline, with the main visual system implemented in `src/index.css` for tighter art direction.
- Framer Motion for page transitions and premium micro-interactions.
- Lucide React for interface icons.

The stack is fully free and deploys as static files to GitHub Pages. Vite is configured with `base: '/planet-fitness-kyiv/'`, and the build copies `index.html` to `404.html` so direct route URLs work on GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deploy

The project can deploy the built `dist` folder to the `gh-pages` branch:

```bash
npm run build
npm run deploy
```

After the repository is connected, GitHub Pages should be set to serve from the `gh-pages` branch, root folder.

## Content Structure

Main editable content lives in:

- `src/content/siteContent.ts` - navigation, UA/EN copy, CTA links, trainers, memberships, training directions, gallery data and contacts.
- `public/images/instagram/` - optimized WebP assets collected from Instagram.
- `public/favicon.png` and `public/og-image.webp` - link preview and favicon assets.
- `content-audit.md` - source notes and unconfirmed data, not displayed on the website.

## How To Update Content

Edit `src/content/siteContent.ts`:

- Contacts: update `links` and `copy.ua.contacts` / `copy.en.contacts`.
- Trainers: update the `trainers` object.
- Prices: update the `memberships` object.
- Training directions: update `trainingItems`.
- Gallery: update `gallery` and add images to `public/images/instagram/`.

All user-facing text has UA and EN variants. When adding a new item, add both languages in the same file.

## Future Admin Panel

The site is ready for a later admin layer because content is separated from components. A future prompt can replace `src/content/siteContent.ts` with:

- a JSON file loaded at build time,
- a headless CMS,
- a small authenticated admin route,
- or GitHub-backed editing through repository commits.

The UI components already consume structured data, so the admin work should focus on editing and validation rather than redesigning the site.

## Custom Domain

To connect a custom domain later:

1. Add the domain in GitHub repository settings under Pages.
2. Add the required DNS records at the domain provider.
3. Add a `public/CNAME` file containing the domain.
4. Update `public/sitemap.xml`, Open Graph URLs if needed, and `vite.config.ts` if the site moves away from the repository subpath.
