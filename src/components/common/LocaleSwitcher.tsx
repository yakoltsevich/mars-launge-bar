'use client';

import {usePathname} from 'next/navigation';

export const LocaleSwitcher = () => {
    const pathname = usePathname(); // например: /pl/menu
    const nextLocale = pathname.startsWith('/pl') ? 'en' : 'pl';
    const nextPath = pathname.replace(/^\/(pl|en)/, `/${nextLocale}`);

    return <a href={nextPath}>{nextLocale.toUpperCase()}</a>;
};
