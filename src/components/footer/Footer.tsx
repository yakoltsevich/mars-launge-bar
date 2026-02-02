'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    const brand = 'the MARS lounge'
    const developerName = 'Dev by @yak'
    const githubUrl = 'https://github.com/yakoltsevich'

    return (
        <footer className="mt-14 border-t border-white/10">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
                {/* Brand */}
                <div className="flex items-center gap-2 text-[11px] tracking-[0.26em] uppercase text-white/55">

                    <Link
                        href="/"
                        className="flex items-center gap-3 text-white/90 hover:text-white transition"
                        aria-label="На главную"
                    >
                        <span
                            className="h-2 w-2 rounded-full bg-red-500/90 shadow-[0_0_14px_rgba(239,68,68,0.35)]"
                            aria-hidden
                        /> <span>{brand}</span>
                    </Link>

                </div>

                {/* Signature */}
                <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/45">
                    <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
                    <span className="opacity-30">·</span>
                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white/70 transition"
                    >
                        {developerName}
                    </Link>
                </div>
            </div>
        </footer>
    );
};
