# Dependency security update

- Branch: `overnight/deps`; draft PR prepared. No merge or deployment.
- Upgraded Astro 6.1.2 → 7.4.5 and refreshed pnpm dependencies; pinned patched esbuild via pnpm override. Requires Node >=22.23.4 and pnpm 12.16.1.
- All 58 open alert ranges checked (2 critical, 26 high): no installed vulnerable versions. `pnpm audit`: zero vulnerabilities.
- Frozen install, build (including 106-service CSV validation), lint (Astro check), peer checks and whitespace checks pass. No existing test suite; added reproducible lint command.
- Eight before/after screenshot pairs: homepage, pricing, contact and 404 at desktop/390px. All pixel-identical after stable loading; mobile menu/navigation works. Evidence: `docs/dependency-upgrade/`.
- Run: `pnpm install --frozen-lockfile && pnpm lint && pnpm build`; `pnpm dev` for local use.
- Assumptions: `NOTES.md`. Remaining: review/merge draft PR; GitHub alerts close after default-branch rescan. No other decisions required.
