export type TableCardVariant = "wide" | "regular";

export type TableCardData = {
    id: string;
    title: string;
    priceText: string; // "70 PLN" / "39 PLN" / "MIN. BILL 120 ZŁ"
    subtitle?: string; // "До 4 гостей" или "MN – THS."
    lines: string[]; // основной текст (несколько строк)
    imageUrl: string;
    variant?: TableCardVariant;
};

const TABLE_IMAGE =
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80";

const TABLE_IMAGE_2 =
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80";

export const TABLES: TableCardData[] = [
    // первые 2 — wide, стиль карточки такой же, только шире
    {
        id: "zone-game",
        variant: "wide",
        title: "GAME ZONE",
        priceText: "",
        lines: ["MN – THS.", "MIN. BILL 120 ZŁ", "", "FR – SUN.", "MIN. BILL 150 ZŁ", "", "2 HOURS LIMIT"],
        imageUrl: TABLE_IMAGE,
    },
    {
        id: "zone-vip",
        variant: "wide",
        title: "VIP ZONE",
        priceText: "",
        lines: ["MN – THS.", "MIN. BILL 300 ZŁ", "", "FR – SUN.", "MIN. BILL 400 ZŁ", "", "4 HOURS LIMIT"],
        imageUrl: TABLE_IMAGE_2,
    },

    // остальные — обычные
    {
        id: "t1",
        title: "Столик №1",
        priceText: "39 PLN",
        subtitle: "До 4 гостей",
        lines: ["Минимальный депозит: 300 PLN.", "В пятницу и субботу — 400 PLN.", "10% сервисный сбор."],
        imageUrl: TABLE_IMAGE,
    },
    {
        id: "t2",
        title: "Столик №2",
        priceText: "70 PLN",
        subtitle: "До 5 гостей",
        lines: ["Минимальный депозит: 300 PLN.", "В пятницу и субботу — 400 PLN.", "10% сервисный сбор."],
        imageUrl: TABLE_IMAGE_2,
    },
    {
        id: "t3",
        title: "Столик №3",
        priceText: "70 PLN",
        subtitle: "До 6 гостей",
        lines: ["Минимальный депозит: 300 PLN.", "В пятницу и субботу — 400 PLN.", "10% сервисный сбор."],
        imageUrl: TABLE_IMAGE,
    },
    {
        id: "t4",
        title: "Столик №4",
        priceText: "70 PLN",
        subtitle: "До 6 гостей",
        lines: ["Минимальный депозит: 300 PLN.", "В пятницу и субботу — 400 PLN.", "10% сервисный сбор."],
        imageUrl: TABLE_IMAGE_2,
    },
    {
        id: "t5",
        title: "Столик №5",
        priceText: "70 PLN",
        subtitle: "До 4 гостей",
        lines: ["Минимальный депозит: 300 PLN.", "В пятницу и субботу — 400 PLN.", "10% сервисный сбор."],
        imageUrl: TABLE_IMAGE,
    },
];
