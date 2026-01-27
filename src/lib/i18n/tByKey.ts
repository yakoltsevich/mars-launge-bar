// src/lib/i18n/tByKey.ts

import type { MenuDictionary } from '@/types/i18n';

type Join<K, P> = K extends string
    ? P extends string
        ? `${K}.${P}`
        : never
    : never;

type Prev = [never, 0, 1, 2, 3, 4, 5];

// Генерируем ВСЕ допустимые пути ключей (до глубины 5)
export type Paths<T, D extends number = 5> = [D] extends [never]
    ? never
    : T extends object
        ? {
            [K in keyof T & string]:
            | K
            | Join<K, Paths<T[K], Prev[D]>>;
        }[keyof T & string]
        : never;

export type MenuKey = Paths<MenuDictionary>;

export const tByKey = (
    dict: MenuDictionary,
    key: MenuKey,
): string => {
    const parts = key.split('.');
    let current: any = dict;

    for (const part of parts) {
        current = current?.[part];
        if (current === undefined) return key; // fallback
    }

    return typeof current === 'string' ? current : key;
};
