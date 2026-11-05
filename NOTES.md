# Assumptions
- Fix all 58 currently open alerts (2 critical, 26 high), including lower severities.
- Upgrade Astro 6 to 7 because critical fixes require 7.2.8 or later. Static output needs no source migration; require Node >=22.23.4.
- No lint or test runner existed. Add `pnpm lint` using Astro diagnostics; keep TypeScript 5.9 compatible with its checker.
- Use pnpm 12.16.1 already installed; record its build permissions and esbuild override in pnpm-workspace.yaml. Remove the old npm-only Vite override.
- GitHub alerts track the default branch and will remain open until this draft is merged and rescanned. No alerts are dismissed.
- Visual checks cover homepage, pricing and contact anchors, and 404, at desktop and 390px phone width. External booking/phone/map actions are inspected without submitting or contacting anyone.
