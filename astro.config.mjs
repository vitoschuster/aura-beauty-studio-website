// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://aurabeautystudio.com.hr',
  output: 'static',
  adapter: cloudflare(),
});
