// src/types/i18n.ts

export type MenuDictionary = {
    menu: {
        brand: string;
        categories: Record<
            string,
            {
                title: string;
            }
        >;
        items: Record<
            string,
            {
                name: string;
                description?: string;
            }
        >;
    };
};
