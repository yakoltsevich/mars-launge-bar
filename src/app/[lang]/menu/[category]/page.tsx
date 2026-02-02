import {notFound} from "next/navigation";
import {MenuItemCard} from "@/components/menu/MenuItemCard";
import {MenuCategory, MenuItem} from "@/types/menu";
import {getMenuCategoryById, getMenuItemsByCategoryId} from "@/lib/menu";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {tByKey} from "@/shared/helpers/tByKey";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";
import {CategoryRow} from "@/components/menu/CategoryRow";
import React from "react";

export type PageProps = {
    params: Promise<{ lang: 'pl' | 'en', category: string }>;
};
export default async function MenuCategoryPage({params}: PageProps) {
    const {lang, category} = await params;
    const dict = await getDictionary(lang);
    const currentCategory: MenuCategory | undefined = getMenuCategoryById(category);
    const categoryItems: MenuItem[] = getMenuItemsByCategoryId(category);

    if (!category) {
        notFound();
    }

    return (
        <MainPageWrapper className='sm:max-w-6xl'>
            <h1 className="mb-2 sm:mb-4 text-[28px] tracking-[0.08em] text-white/85">
                {tByKey(dict, currentCategory?.titleKey || '')}
            </h1>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-4 ">
                {categoryItems.map((item) => (
                    <MenuItemCard key={item.id} item={item}/>
                ))}
            </div>
        </MainPageWrapper>
    );
}
