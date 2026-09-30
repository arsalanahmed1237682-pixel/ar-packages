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

## Production checks

Run the lint and optimized build before deployment:

```bash
npm run lint
npm run build
```

Serve the generated production build with `npm run start`.