import React from 'react';
import {notFound} from 'next/navigation';
import {MenuItemCard} from '@/components/menu/MenuItemCard';
import type {MenuCategory, MenuItem} from '@/types/menu';
import {getMenuCategories, getMenuCategoryById, getMenuItemsByCategoryId} from '@/lib/menu';
import {getDictionary, hasLocale} from '@/app/[lang]/dictionaries';
import {tByKey} from '@/shared/helpers/tByKey';
import {MainPageWrapper} from '@/components/common/MainPageWrapper';
import MENU_CATEGORIES from '@/content/menu/categories.json';
import {MenuCategoryNav} from "@/components/menu/MenuCategoryNav";

const LOCALES = ['pl', 'en'] as const;

export const generateStaticParams = async () => {
    const activeCategoryIds = MENU_CATEGORIES
        .filter((c) => c.isActive)
        .map((c) => c.id);

    return LOCALES.flatMap((lang) =>
        activeCategoryIds.map((category) => ({lang, category}))
    );
};

export type PageProps = {
    params: Promise<{ lang: (typeof LOCALES)[number]; category: string }>;
};
export default async function MenuCategoryPage({params}: PageProps) {
    const {lang, category} = await params;

    if (!hasLocale(lang)) notFound();
    if (!category) notFound();

    const currentCategory: MenuCategory | undefined = getMenuCategoryById(category);
    if (!currentCategory) notFound();

    const dict = await getDictionary(lang);
    const categoryItems: MenuItem[] = getMenuItemsByCategoryId(category);
    const categories: MenuCategory[] | undefined = getMenuCategories();

    return (
        <MainPageWrapper className="sm:max-w-6xl pt-32">
            <MenuCategoryNav categories={categories} lang={lang}/>
            <h1 className="mb-2 sm:mb-4 text-[28px] tracking-[0.08em] text-white/85">
                {tByKey(dict, currentCategory.titleKey)}
            </h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                {categoryItems.map((item) => (
                    <MenuItemCard key={item.id} item={item}/>
                ))}
            </div>
        </MainPageWrapper>
    );
}
