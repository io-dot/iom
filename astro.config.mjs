import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://io-dot.github.io',
  base: '/iom',
	integrations: [mdx(), sitemap()],
});
