import { es } from "./es";
import { en } from "./en";

export const translations = {
    es,
    en,
};

export function getTranslations(locale = "es") {
    return translations[locale as keyof typeof translations] ?? es;
}