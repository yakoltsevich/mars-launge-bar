export const MENU_MOCK = {
    craftCocktails: {
        title: "Craft Cocktails",
        viewAllHref: "/menu/craft-cocktails",
        items: Array.from({ length: 10 }).map((_, i) => ({
            id: `craft-${i + 1}`,
            title:
                [
                    "Smoked Old Fashioned",
                    "Mars Boulevardier",
                    "Neon Espresso Martini",
                    "Cherry Smoke Sour",
                    "Velvet Manhattan",
                    "Spiced Negroni",
                    "Golden Highball",
                    "Cocoa Martini",
                    "Citrus Collins",
                    "Oak Sour",
                ][i] ?? `Item ${i + 1}`,
            price: [39, 41, 38, 37, 40, 42, 35, 36, 34, 45][i] ?? 39,
            currency: "PLN",
            desc:
                [
                    "Bourbon, sugar, Angostura",
                    "Whiskey, Campari, vermouth",
                    "Vodka, coffee liqueur, espresso",
                    "Bourbon, cherry, lemon foam",
                    "Rye, bitters, vermouth",
                    "Gin, Campari, vermouth",
                    "Whiskey, soda, citrus",
                    "Vodka, cocoa, cream",
                    "Gin, citrus, soda",
                    "Whiskey, citrus, oak",
                ][i] ?? "Signature mix",
            imageUrl:
                [
                    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1564758866819-0d4f4f6cc12a?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1541544181051-e46601d1b6a4?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1527168027773-0cc890c4fcd8?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1514361892635-e0f9f55b99f8?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1560963689-b5682b6440f8?auto=format&fit=crop&w=1200&q=80",
                ][i] ??
                "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&w=1200&q=80",
        })),
    },
};
