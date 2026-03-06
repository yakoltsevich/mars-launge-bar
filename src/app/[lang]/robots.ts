import type {MetadataRoute} from "next";
import MENU_CATEGORIES from "@/content/menu/categories.json";

const SITE_URL = "https://www.mars-lounge.bar";
const LOCALES = ["pl", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        "",
        "/menu",
        "/tables",
        "/contact",
        "/happenings",
    ];

    const categoryPages = MENU_CATEGORIES
        .filter(c => c.isActive)
        .map(c => `/menu/${c.id}`);

    const urls: MetadataRoute.Sitemap = [];

    for (const lang of LOCALES) {

        // обычные страницы
        for (const page of pages) {
            urls.push({
                url: `${SITE_URL}/${lang}${page}`,
                lastModified: new Date(),
            });
        }

        // страницы категорий меню
        for (const category of categoryPages) {
            urls.push({
                url: `${SITE_URL}/${lang}${category}`,
                lastModified: new Date(),
            });
        }
    }

    return urls;
}