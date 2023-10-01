import { defineConfig, passthroughImageService } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import critters from 'astro-critters';

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    prefetch({
      intentSelector: ["a[href^='/']"],
    }),
    critters(),
  ],
});
