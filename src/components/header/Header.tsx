'use client';

import React, {useEffect, useMemo, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {AnimatePresence, motion} from 'framer-motion';
import {LocaleSwitcher} from '@/components/common/LocaleSwitcher';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark,} from '@fortawesome/free-solid-svg-icons';
import clsx from "clsx";

export const NAV_LINKS = [
    {titleKey: "Home", href: "/"},
    {titleKey: "Menu", href: "/menu"},
    {titleKey: "Tables", href: "/tables"},
    {titleKey: "Contact", href: "/contact"},
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((v) => !v);

    useEffect(() => {
        close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen]);

    const mobileLinks = useMemo(() => NAV_LINKS, []);

    const isActive = (href: string) => {
        // подстрой под свою i18n-структуру, если нужно
        if (href === '/') return pathname === '/';
        return pathname?.includes(href);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto max-w-5xl px-4 pt-4">
                <div
                    className="
            flex h-14 items-center justify-between
            rounded-2xl border border-white/10
            bg-black/35 backdrop-blur-md
            shadow-[0_10px_40px_rgba(0,0,0,0.55)]
          "
                >
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-5 text-white/90 hover:text-white transition"
                        aria-label="На главную"
                    >
                        <Image
                            src="/images/common/logo3.png"
                            width={120}
                            height={20}
                            alt="Logo"
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-2 pr-3">
                        <nav className="hidden items-center gap-1 md:flex">
                            {NAV_LINKS.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="
                    rounded-xl px-3 py-2 text-[12px] tracking-[0.18em] uppercase
                    text-white/70 hover:text-white
                    hover:bg-white/5 transition
                  "
                                >
                                    {l.titleKey}
                                </Link>
                            ))}
                            <div className="mx-2 hidden h-6 w-px bg-white/10 md:block"/>
                            <LocaleSwitcher/>
                        </nav>

                        <button
                            type="button"
                            onClick={toggle}
                            className="
                ml-1 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5
                text-white/80 hover:text-white hover:bg-white/10 transition
                md:hidden
              "
                            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav"
                        >
                            <span className="block h-[2px] w-5 bg-current opacity-90"/>
                            <span className="mt-1 block h-[2px] w-5 bg-current opacity-65"/>
                        </button>
                    </div>
                </div>
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
                        {/* Overlay */}
                        <motion.button
                            type="button"
                            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
                            onClick={close}
                            aria-label="Закрыть меню"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        />

                        {/* Drawer */}
                        <motion.div
                            id="mobile-nav"
                            role="dialog"
                            aria-modal="true"
                            className="absolute right-0 top-0 h-full w-[88%] max-w-sm rounded-l-3xl
                border-l border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.75)] overflow-hidden"
                            initial={{x: 40, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 40, opacity: 0}}
                            transition={{type: 'spring', stiffness: 260, damping: 28}}
                        >
                            {/* Background “glass” */}
                            <div
                                className="
                  absolute inset-0
                  bg-gradient-to-b from-black/70 via-black/55 to-black/80
                  backdrop-blur-xl
                "
                            />
                            {/* Accent glow */}
                            <div
                                className="
                  pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full
                  bg-[#CFA57A]/18 blur-3xl
                "
                            />
                            {/* Subtle highlights */}
                            <div
                                className="
                  pointer-events-none absolute inset-0
                  [background:radial-gradient(900px_500px_at_70%_-10%,rgba(255,255,255,0.10),transparent_60%)]
                "
                            />

                            <div className="relative h-full">
                                {/* Header row */}
                                <div className="flex items-center justify-between px-5 pt-5">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/images/common/logo3.png"
                                            width={120}
                                            height={20}
                                            alt="Logo"
                                            priority
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={close}
                                        className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5
                      text-white/80 hover:text-white hover:bg-white/10 transition"
                                        aria-label="Закрыть"
                                    >
                                        <FontAwesomeIcon icon={faXmark} className="text-lg"/>
                                    </button>
                                </div>

                                <div className="px-5 pt-4">
                                    <div className="h-px w-full bg-white/10"/>
                                </div>

                                {/* Links */}
                                <nav className="px-3 pt-4">
                                    <div className="flex flex-col gap-1">
                                        {mobileLinks.map((l) => {
                                            const active = isActive(l.href);

                                            return (
                                                <Link
                                                    key={l.href}
                                                    href={l.href}
                                                    className={
                                                        clsx('group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition',
                                                            active ? 'bg-white/8' : 'hover:bg-white/7'
                                                        )}
                                                >
                                                    {/* active bar */}
                                                    <span
                                                        className={
                                                            clsx('absolute left-0 top-2 bottom-2 w-[3px] rounded-full',
                                                                active ? 'bg-[#CFA57A]/90' : 'bg-transparent'
                                                            )}
                                                    />

                                                    <span
                                                        className={
                                                            clsx('text-[13px] tracking-[0.16em] uppercase',
                                                                active ? 'text-white' : 'text-white/78 group-hover:text-white'
                                                            )}
                                                    >{l.titleKey}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                    <div className="px-2 pt-4">
                                        <div className="h-px w-full bg-white/10"/>
                                    </div>


                                    <div className="px-2 pt-4">
                                        <div
                                            className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between gap-3">
                                            <div className="text-[11px] tracking-[0.22em] uppercase text-white/60">
                                                Language
                                            </div>
                                            <LocaleSwitcher/>
                                        </div>
                                    </div>
                                </nav>

                                {/* Bottom fade */}
                                <div
                                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"/>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
};
