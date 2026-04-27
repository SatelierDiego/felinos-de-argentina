// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://felinosdeargentina.com.ar',
  trailingSlash: 'ignore',
  integrations: [
    sitemap(),
    icon({
      iconDir: 'src/assets/icons/tabler/outline',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
});
