import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  sites: 'https://alfredo14.github.io',
  devToolbar: {
    enabled: false
  },
  integrations: [react(), tailwind(), sitemap()]
});
