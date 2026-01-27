'use client';

import React, { createContext, useContext } from 'react';
import type { MenuDictionary } from '@/types/i18n';

const I18nContext = createContext<MenuDictionary | null>(null);

export const I18nProvider = ({
                                 dict,
                                 children,
                             }: {
    dict: MenuDictionary;
    children: React.ReactNode;
}) => {
    return <I18nContext.Provider value={dict}>{children}</I18nContext.Provider>;
};

export const useDict = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useDict must be used within I18nProvider');
    return ctx;
};
