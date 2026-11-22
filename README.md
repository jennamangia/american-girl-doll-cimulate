# American Girl × Cimulate

An executive microsite comparing captured American Girl search results with illustrative Cimulate-powered product discovery. The West Marine, PacSun, and Ann Taylor sections use actual customer examples.

## Develop locally

Use Node 24 and npm 11.

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm run test:deployment
```

The last check exercises the built server and static assets locally.

The layout and interaction patterns were adapted from Ariat `main` at `3b9a4d4558327fb0b1ccf86fb0fd8c461e1e44ae`. The American Girl artwork comes from the supplied captures. See [Screenshot provenance](docs/screenshots.md) for the assembly details.
