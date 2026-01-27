'use client';

import clsx from 'clsx';
import {motion} from 'framer-motion';
import {usePathname, useRouter} from 'next/navigation';

export const LocaleSwitcher = () => {
    const pathname = usePathname();
    const router = useRouter();

    const currentLocale = pathname.startsWith('/en') ? 'en' : 'pl';
    const nextLocale = currentLocale === 'en' ? 'pl' : 'en';

    const onToggle = () => {
        const nextPath = pathname.replace(/^\/(pl|en)/, `/${nextLocale}`);
        router.push(nextPath);
    };

    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label="Switch language"
            className={clsx(
                'relative inline-flex items-center',
                'h-8 w-[92px] rounded-full p-0.5',
                'border border-white/20 bg-white/5 backdrop-blur-md',
                'cursor-pointer select-none',
                'transition-colors duration-200 hover:border-white/30'
            )}
        >
            <div className="grid h-full w-full grid-cols-2 gap-0.5">
                {(['pl', 'en'] as const).map((locale) => {
                    const isActive = locale === currentLocale;

                    return (
                        <div key={locale} className="relative h-full">
                            {isActive && (
                                <motion.span
                                    layoutId="locale-pill"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 720,
                                        damping: 50,
                                        mass: 0.65,
                                    }}
                                    className={clsx(
                                        'absolute inset-0 rounded-full',
                                        'bg-[rgba(120,84,52,0.6)]',
                                        'ring-1 ring-[rgba(160,120,80,0.45)]',
                                        'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]'
                                    )}
                                />
                            )}

                            <span
                                className={clsx(
                                    'relative z-10 flex h-full items-center justify-center',
                                    'text-[12px] font-light uppercase',
                                    'tracking-[0.22em]',
                                    isActive ? 'text-white' : 'text-white/55'
                                )}
                            >
                                {locale}
                            </span>
                        </div>
                    );
                })}
            </div>
        </button>
    );
};
