'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import clsx from 'clsx'
import {motion} from 'framer-motion'
import {MenuCategory} from "@/types/menu";
import {tByKey} from "@/shared/helpers/tByKey";
import {useDict} from "@/components/i18n/I18nProvider";
import React from "react";

type NavItemProps = {
    lang: 'pl' | 'en'
    activeSlug: string | null
    category: MenuCategory
}
const NavItem = ({category, lang, activeSlug}: NavItemProps) => {
    const dict = useDict()
    const href = `/${lang}/menu/${category.id}`
    const isActive = activeSlug === category.id
    return <Link
        key={category.id}
        href={href}
        className={clsx(
            'relative shrink-0 whitespace-nowrap p-2 rounded-full text-sm tracking-wide transition-all duration-300',
            'border border-white/10 backdrop-blur-md',
            isActive
                ? 'text-[#CFA57A]'
                : 'text-white/60 hover:text-white'
        )}
    >
        <span className="relative z-10">{tByKey(dict, category.titleKey)}</span>

        {isActive && (
            <motion.span
                layoutId="activeMenuCategory"
                className="absolute inset-0 rounded-full border border-[#CFA57A]/40 bg-[#CFA57A]/10"
                transition={{type: 'spring', stiffness: 320, damping: 30}}
            />
        )}
    </Link>
}

type MenuCategoryNavProps = {
    lang: 'pl' | 'en'
    categories: MenuCategory[]
}
export const MenuCategoryNav = ({lang, categories,}: MenuCategoryNavProps) => {
    const pathname = usePathname()

    const activeSlug =
        pathname?.match(new RegExp(`^/${lang}/menu/([^/?#]+)`))?.[1] ?? null

    return (
        <div className='fixed left-0 top-20 z-50 w-full'>
            <div
                className={clsx(
                    'mx-auto max-w-5xl px-4 pt-4'
                )}
            >
                <div
                    className={clsx(
                        'flex  w-full items-center justify-center',
                        'gap-2 overflow-x-auto snap-x snap-mandatory scroll-px-4',
                        '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                    )}
                >
                    {categories.map((category) => {
                        return <NavItem
                            key={category.id}
                            category={category}
                            activeSlug={activeSlug}
                            lang={lang}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}