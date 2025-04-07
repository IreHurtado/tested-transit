// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://IreHurtado.github.io",
    base: "/tested-transit",
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true
        }
    }
});
