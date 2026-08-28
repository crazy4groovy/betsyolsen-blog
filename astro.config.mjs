import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://betsyolsen.com',
  prefetch: true,
  // Keep HTML-aware whitespace instead of Astro 7's JSX default.
  compressHTML: true,
  integrations: [mdx(), sitemap()]
});
