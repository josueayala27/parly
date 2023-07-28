import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  devtools: { enabled: true },
  vite: {
    plugins: [svgLoader()],
  },
});
