import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  // Add your site's URL here
  site: "https://example.com",

  integrations: [preact()]
});