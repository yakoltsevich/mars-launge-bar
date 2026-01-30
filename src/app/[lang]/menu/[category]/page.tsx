import {notFound} from "next/navigation";
import {MenuItemCard} from "@/components/menu/MenuItemCard";
import {MenuCategory, MenuItem} from "@/types/menu";
import {getMenuCategoryById, getMenuItemsByCategoryId} from "@/lib/menu";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {tByKey} from "@/shared/helpers/tByKey";

export type PageProps = {
    params: Promise<{ lang: 'pl' | 'en', category: string }>;
};
export default async function MenuCategoryPage({params}: PageProps) {
    const {lang, category} = await params;
    console.log(category);
    const dict = await getDictionary(lang);
    const currentCategory: MenuCategory | undefined = getMenuCategoryById(category);
    const categoryItems: MenuItem[] = getMenuItemsByCategoryId(category);

    if (!category) {
        notFound();
    }

    return (
        <main className="pt-24">
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="mb-8 text-[28px] tracking-[0.08em] text-white/85">
                    {tByKey(dict, currentCategory?.titleKey || '')}
                </h1>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categoryItems.map((item) => (
                        <MenuItemCard key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </main>
    );
}
