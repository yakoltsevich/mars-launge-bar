import { CategoryRow } from "@/components/menu/CategoryRow";
import { MENU_MOCK } from "@/components/menu/menuMock";
import {getMenuCategories} from "@/lib/menu/getMenuCategories";

export default function MenuPage() {
    const { craftCocktails } = MENU_MOCK;

    const categories = getMenuCategories();
    return (
        <main className="pt-24">
            {
                categories.map(category => {
                    return (
                        <CategoryRow
                            key={category.id}
                            title={craftCocktails.title}
                            viewAllHref={craftCocktails.viewAllHref}
                            items={craftCocktails.items}
                        />
                    )
                })
            }

        </main>
    );
}
