import { es } from "./es";
import { en } from "./en";

export const translations = {
    ES: es,
    EN: en,
};

export type Language = keyof typeof translations;