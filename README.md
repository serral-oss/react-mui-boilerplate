# React + MUI Boilerplate

React 19, MUI 9, Redux Toolkit and React Router, built with [Vite](https://vite.dev).

Requires Node.js 22.12+ or 24+.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` / `npm start` | Start the dev server at [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Type-check and build for production into `build/` |
| `npm run preview` | Serve the production build locally |
| `npm run analyze` | Build and open a bundle-size report |
| `npm test` | Run tests with Vitest in watch mode (`npm run test:run` for a single run) |
| `npm run typecheck` | Type-check without building |
| `npm run lint` / `npm run lint:fix` | Lint the `src` folder |
| `npm run format:check` / `npm run format:fix` | Check or apply Prettier formatting |

## Environment variables

Vite only exposes variables prefixed with `VITE_` to the client. Create a `.env.local` file:

```
VITE_API_BASE_URL=http://localhost:5001
```

Access them with `import.meta.env.VITE_API_BASE_URL`.

## SVG icons

SVGs are imported as React components with the `?react` suffix:

```tsx
import Logo from '@/assets/svg/logo.svg?react'
```

Without the suffix, an SVG import resolves to its URL.
