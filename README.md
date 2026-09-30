# AR Packages

The production website is a Next.js application rooted at the repository root. There is one package manifest and one lockfile; `src/app` owns routes and layouts, `src/components` contains the site's UI, `src/data` contains product data, and `public` contains assets served directly by Next.js.

## Requirements

- Node.js 18.17 or newer
- npm

## Development

Install the locked dependencies and start the local server:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` to view the site.

## cPanel deployment

Create the static production site:

```bash
npm run lint
npm run build:cpanel
```

Upload the **contents** of `out/` to your cPanel document root, usually `public_html/`. Include the hidden `.htaccess` file. The export contains static HTML for each route and does not require a Node.js application on the host.