'use client';

import React, {useEffect, useMemo, useState} from 'react';
import {usePathname} from 'next/navigation';
import {AnimatePresence, motion} from 'framer-motion';

import {NAV_LINKS} from './navLinks';
import type {NavLink} from './types';

import {HeaderShell} from './HeaderShell';
import {HeaderLogo} from './HeaderLogo';
import {DesktopNav} from './DesktopNav';
import {MobileMenuButton} from './MobileMenuButton';
import {MobileNavOverlay} from './MobileNavOverlay';
import {MobileNavDrawer} from './MobileNavDrawer';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((v) => !v);

    // close on route change
    useEffect(() => {
        close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    // close on Esc
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);

    // lock body scroll
    useEffect(() => {
        if (!isOpen) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen]);

    const getLangPrefix = (path: string) => {
        // expects /en/... or /pl/... etc (app/[lang]/...)
        const m = path.match(/^\/([^/]+)(\/|$)/);
        const maybeLang = m?.[1];
        return maybeLang ? `/${maybeLang}` : '';
    };

    const langPrefix = useMemo(() => getLangPrefix(pathname ?? '/'), [pathname]);

    const withLang = (href: NavLink['href']) => {
        // href relative: '' | 'menu' | ...
        if (!langPrefix) return href ? `/${href}` : '/';
        return href ? `${langPrefix}/${href}` : `${langPrefix}/`;
    };

    const isActive = (href: NavLink['href']) => {
        const full = withLang(href);

        // Home
        if (full === `${langPrefix}/`) return pathname === `${langPrefix}/`;

        // exact or nested: /en/menu or /en/menu/xxx
        return pathname === full || !!pathname?.startsWith(`${full}/`);
    };

    const mobileLinks = useMemo(() => NAV_LINKS as unknown as NavLink[], []);

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto max-w-5xl px-4 pt-4">
                <HeaderShell>
                    <HeaderLogo href={withLang('')}/>

                    <div className="flex items-center gap-2 pr-3">
                        <DesktopNav links={NAV_LINKS as unknown as NavLink[]} withLang={withLang}/>
                        <MobileMenuButton isOpen={isOpen} onToggle={toggle}/>
                    </div>
                </HeaderShell>
            </div>

            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        className="fixed inset-0 z-50 md:hidden"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        aria-hidden={!isOpen}
                    >
                        <MobileNavOverlay onClose={close}/>

                        <MobileNavDrawer
                            links={mobileLinks}
                            withLang={withLang}
                            isActive={isActive}
                            onClose={close}
                        />
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
};
