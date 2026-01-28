"use client";


import React from "react";
import {MenuItemCard} from "./MenuItemCard";
import {ViewAllLink} from "@/components/common/ViewAllLink";
import {MenuItem} from "@/types/menu";
import {usePathname} from "next/navigation";

type Props = {
    title: string;
    categoryId: string;
    items: MenuItem[];
};

export const CategoryRow = ({title, items, categoryId}: Props) => {
    const viewAllHref = 'categoryId'
    const pathname = usePathname();
    return (
        <div className="mx-auto flex flex-col items-start justify-center max-w-7xl">
            <div className="w-full flex items-start justify-between gap-4 px-4">
                <h3 className="text-[22px] tracking-[0.06em] text-white/80">{title}</h3>
                <ViewAllLink href={pathname + '/' + categoryId}/>
            </div>

            <div
                className="w-full flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory px-4 scroll-px-4
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                     "
            >
                {items.map((it) => (
                    <div key={it.id} className="snap-start">
                        <MenuItemCard item={it}/>
                    </div>
                ))}
            </div>

            <div className="h-px w-full bg-white/10"/>
        </div>
    );
};
