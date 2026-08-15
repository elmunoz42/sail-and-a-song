# Sail & A Song

Brochure site for Sail & A Song, an educational acoustic performance and
songwriting series filmed aboard a sailboat in Santa Barbara Harbor.

## Local development

Requires Node.js 22.13 or newer.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
pnpm build
pnpm start
```

The project is a standard Next.js App Router application and is ready to import
into Vercel. The current social links and featured YouTube episode are defined
in `app/page.tsx`.
