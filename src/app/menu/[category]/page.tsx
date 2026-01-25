import { notFound } from "next/navigation";
import { MENU_MOCK } from "@/components/menu/menuMock";
import { MenuItemCard } from "@/components/menu/MenuItemCard";

type Props = {
    params: {
        category: string;
    };
};

export default function MenuCategoryPage({ params }: Props) {
    // временно — простой маппинг
    const category =
        params.category === "craft-cocktails"
            ? MENU_MOCK.craftCocktails
            : null;

    if (!category) {
        notFound();
    }

    return (
        <main className="pt-24">
            <div className="mx-auto max-w-[1100px] px-4">
                <h1 className="mb-8 text-[28px] tracking-[0.08em] text-white/85">
                    {category.title}
                </h1>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item) => (
                        <MenuItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </main>
    );
}
