import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), react(), tailwind(), sitemap()],
  site: "https://bensparrow.dev",
  server: {
    host: true,
  },
});