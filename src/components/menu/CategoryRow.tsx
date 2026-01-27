"use client";


import React from "react";
import {MenuItemCard} from "./MenuItemCard";
import {ViewAllLink} from "@/components/common/ViewAllLink";
import {MenuItem} from "@/types/menu";

type Props = {
    title: string;
    items: MenuItem[];
};

export const CategoryRow = ({title, items}: Props) => {
    const viewAllHref = ''
    return (
        <section className="py-10">
            <div className="mx-auto max-w-[1100px] px-4">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[22px] tracking-[0.06em] text-white/80">{title}</h3>
                    <ViewAllLink  href={viewAllHref}/>
                </div>

                <div
                    className="
            mt-5 flex gap-4 overflow-x-auto pb-3
            snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
                >
                    {items.map((it) => (
                        <div key={it.id} className="snap-start">
                            <MenuItemCard item={it}/>
                        </div>
                    ))}
                </div>

                <div className="mt-6 h-px w-full bg-white/10"/>
            </div>
        </section>
    );
};
