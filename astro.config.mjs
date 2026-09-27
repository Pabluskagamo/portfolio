export default defineConfig({
    site: "https://pabluskagamo.github.io",
    base: "/portfolio",
    trailingSlash: "always",

    integrations: [
        tailwind(),
        react(),
    ],

    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        },
    },
});