'use client';

import React, {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

import {NAV_LINKS} from "@/shared/config/nav";
import {LocaleSwitcher} from "@/components/common/LocaleSwitcher";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((v) => !v);

    // Close on route change (mobile link click or any navigation)
    useEffect(() => {
        close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    // Close on Esc
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    // Lock body scroll when menu open
    useEffect(() => {
        if (!isOpen) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen]);

    const mobileLinks = useMemo(() => NAV_LINKS, []);

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
                    {/* Left: logo */}
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

                    {/* Right: nav + phone */}
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
                                    {l.label}
                                </Link>
                            ))}
                            <div className="mx-2 hidden h-6 w-px bg-white/10 md:block" />

                            <LocaleSwitcher />

                        </nav>



                        <button
                            type="button"
                            onClick={toggle}
                            className="
                ml-1 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5
                text-white/80 hover:text-white hover:bg-white/10 transition
                md:hidden
              "
                            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav"
                        >
                            <span className="block h-[2px] w-5 bg-current opacity-90" />
                            <span className="mt-1 block h-[2px] w-5 bg-current opacity-65" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`
          md:hidden
          ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
          fixed inset-0 z-50 transition-opacity
        `}
                aria-hidden={!isOpen}
            >
                {/* Overlay */}
                <button
                    type="button"
                    className="absolute inset-0 bg-black/60"
                    onClick={close}
                    aria-label="Закрыть меню"
                />

                {/* Drawer */}
                <div
                    id="mobile-nav"
                    className={`
            absolute right-0 top-0 h-full w-[85%] max-w-sm
            border-l border-white/10 bg-black/85 backdrop-blur-md
            shadow-[0_10px_40px_rgba(0,0,0,0.65)]
            transition-transform
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between px-4 pt-4">
            <span className="text-white/80 text-sm tracking-[0.18em] uppercase">
              Menu
            </span>

                        <button
                            type="button"
                            onClick={close}
                            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5
                text-white/80 hover:text-white hover:bg-white/10 transition"
                            aria-label="Закрыть"
                        >
                            <span className="text-xl leading-none">×</span>
                        </button>
                    </div>

                    <div className="px-3 pt-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                            <LocaleSwitcher />
                        </div>

                        <nav className="mt-3 flex flex-col gap-1">
                            {mobileLinks.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="
                    rounded-xl px-4 py-3 text-[13px] tracking-[0.16em] uppercase
                    text-white/80 hover:text-white hover:bg-white/10 transition
                  "
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
