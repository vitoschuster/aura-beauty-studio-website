# Aura Beauty Studio

Static Astro website for [aurabeautystudio.com.hr](https://aurabeautystudio.com.hr).

## Development and deployment

Use Node **22.12+** and the existing pnpm lockfile:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

Cloudflare Pages uses `pnpm build` and serves `dist/`. Deploy committed repository files through the existing Git integration. The build verifies the downloadable CSV before building the static site.

## Price list maintenance

`src/data/pricing.json` is the shared source for the website menu and downloadable CSV, transcribed from the approved final PDF. Preserve its service names, package inclusions, current `price` amounts, and confirmed reference `anchorPrice` amounts. The reference date is **10 September 2026**. Gift amounts have unique full names for export; `displayName` can retain the shorter printed label.

For future price changes:

1. Update current `price` amounts, retaining the confirmed reference amounts and dates.
2. Run `pnpm export-prices` to create a UTF-8 CSV snapshot in `public/cjenici/` and update `src/data/price-lists.json`.
3. Commit the price data, generated CSV, and metadata together. Keep previous CSV snapshots publicly available for at least 30 days; the exporter preserves them automatically.
4. Deploy by **08:00 Europe/Zagreb on the effective date** of the price change.

The exporter writes a new snapshot only when exported data changes. `pnpm export-prices --force` explicitly publishes a new snapshot without a change. `pnpm export-prices --check` validates the latest prices and archive integrity without writing files; `pnpm build` runs this check automatically. Do not edit generated CSVs or metadata by hand.

CSV amounts use a decimal point and two decimal places, with separate current and reference EUR columns. The promotion flag is `false` with a blank promotion name unless a service explicitly sets `discountApplied: true` and `discountName`. Package inclusions from `group.details` are exported in the `opis_usluge` column. New services introduced after the reference date need their first regular price and its date displayed in the menu, PDF, and CSV. Update the downloadable PDF whenever the printed price list changes.

Official requirements: [additional-price display, NN 101/2026-1212](https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1212.html), [CSV/XML publication, NN 101/2026-1213](https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1213.html). Both obligations begin **17 November 2026**, under the [display postponement](https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_110_1309.html) and [publication postponement](https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_110_1310.html).
