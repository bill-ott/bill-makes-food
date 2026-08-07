// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      weights: [400, 500],
    },
  ],

  integrations: [mdx()],
});