import { CategoryRow } from "@/components/menu/CategoryRow";
import { MENU_MOCK } from "@/components/menu/menuMock";

export default function MenuPage() {
    const { craftCocktails } = MENU_MOCK;

    return (
        <main className="pt-24">
            <CategoryRow
                title={craftCocktails.title}
                viewAllHref={craftCocktails.viewAllHref}
                items={craftCocktails.items}
            />
        </main>
    );
}
