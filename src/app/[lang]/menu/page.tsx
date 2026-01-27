import {CategoryRow} from "@/components/menu/CategoryRow";
import {getMenuCategories, getAllMenuItems, getMenuItemsByCategoryId} from "@/lib/menu";
import {MenuCategory, MenuItem} from "@/types/menu";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {tByKey} from "@/shared/helpers/tByKey";

export default async function MenuPage({params}) {
    const categories: MenuCategory[] = getMenuCategories();
    const {lang} = await params;
    const dict = await getDictionary(lang);
    return (
        <main className="pt-24">
            {categories.map(category => {
                if (!category.isActive) return null;
                const items = getMenuItemsByCategoryId(category.id)
                return (
                    <CategoryRow key={category.id} title={tByKey(dict, category.titleKey)} items={items}/>
                )
            })}
        </main>
    );
}
