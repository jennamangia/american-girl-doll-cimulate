## Architecture

- American Girl query copy, customer examples, and historical customer metrics live in `src/config/accounts/american-girl.ts`.
- The root route owns the selection shared by the hero and both query sections.
- Preserve original captured results and use supplied photography for illustrative results. Keep the illustrative label outside the product tiles.

## Development

- Use Node 24 and npm 11. Install with `npm ci`.
- Run `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, and `npm run test:deployment`.
