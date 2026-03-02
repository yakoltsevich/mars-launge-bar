import {CategoryRow} from "@/components/menu/CategoryRow";
import {getMenuCategories, getMenuItemsByCategoryId} from "@/lib/menu";
import {MenuCategory} from "@/types/menu";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {tByKey} from "@/shared/helpers/tByKey";
import {PageProps} from "@/types/page";
import React from "react";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";
import {MenuCategoryNav} from "@/components/menu/MenuCategoryNav";

export default async function MenuPage({params}: PageProps) {
    const categories: MenuCategory[] = getMenuCategories();
    const {lang} = await params;
    const dict = await getDictionary(lang);
    return (
        <MainPageWrapper className='!px-0 sm:px-4 pt-32'>
            <MenuCategoryNav categories={categories} lang={lang}/>

            {categories.map(category => {
                if (!category.isActive) return null;
                const items = getMenuItemsByCategoryId(category.id)
                return (
                    <CategoryRow key={category.id} categoryId={category.id} title={tByKey(dict, category.titleKey)}
                                 items={items}/>
                )
            })}
        </MainPageWrapper>
    );
}
