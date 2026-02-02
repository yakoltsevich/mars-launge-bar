import React from 'react';
import Link from 'next/link';
import {LocaleSwitcher} from '@/components/common/LocaleSwitcher';
import type {NavLink} from './types';

type Props = {
    links: NavLink[];
    withLang: (href: NavLink['href']) => string;
};

export const DesktopNav = ({links, withLang}: Props) => {
    return (
        <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
                <Link
                    key={l.href}
                    href={withLang(l.href)}
                    className="
            rounded-xl px-3 py-2 text-[12px] tracking-[0.18em] uppercase
            text-white/70 hover:text-white
            hover:bg-white/5 transition
          "
                >
                    {l.titleKey}
                </Link>
            ))}
            <div className="mx-2 hidden h-6 w-px bg-white/10 md:block" />
            <LocaleSwitcher />
        </nav>
    );
};
