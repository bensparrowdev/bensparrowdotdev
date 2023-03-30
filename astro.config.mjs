import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [image(), react(), tailwind()],
  server: {
    host: true
  }
});