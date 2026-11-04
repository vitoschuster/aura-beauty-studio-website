# Dependency upgrade evidence

Baseline: Astro 6.1.2 from the original frozen lockfile. Updated: Astro 7.4.5.

Eight before/after PNG pairs cover homepage, pricing (#cjenik), contact (#kontakt), and 404 at desktop and 390px CSS phone width. All pairs have zero changed pixels (comparison.json). Desktop home capture disables animations in the browser only and waits for hero image decoding and fonts; other captures wait for anchor scrolling and reveal transitions. No application styles were changed. Screenshots were visually reviewed together; layout, content, images and pricing remain consistent.

The preview screenshot exporter produces 1280x800 desktop PNGs even with a 1440x900 requested viewport; phone PNGs are 780x1688 for 390x844 CSS pixels.

Mobile menu opens, clicking Cjenik navigates and closes it; no horizontal overflow. Price CSV export validates 106 services. Both static routes build. No existing automated test suite.

alerts.json compares every installed occurrence against each of the 58 open GitHub alert ranges: none vulnerable. audit.json independently records zero advisories. GitHub's default-branch alerts remain until merge/rescan.

Checks: `pnpm install --frozen-lockfile`, `pnpm lint` (zero errors/warnings/hints), `pnpm build`, `pnpm audit`, `pnpm peers check`, `git diff --check` all pass.
