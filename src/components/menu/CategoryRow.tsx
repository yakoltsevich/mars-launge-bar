"use client";

import Link from "next/link";
import React from "react";
import { MenuItemCard, type MenuItemCardData } from "./MenuItemCard";

type Props = {
    title: string;
    viewAllHref: string;
    items: MenuItemCardData[];
    onItemClick?: (item: MenuItemCardData) => void;
};

export const CategoryRow = ({ title, viewAllHref, items, onItemClick }: Props) => {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-[1100px] px-4">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[22px] tracking-[0.06em] text-white/80">{title}</h3>

                    <Link
                        href={viewAllHref}
                        className="
              rounded-xl px-3 py-2
              text-[12px] tracking-[0.16em] uppercase
              text-[#CFA57A]/75 hover:text-[#CFA57A]
              hover:bg-white/5 transition
            "
                    >
                        View all →
                    </Link>
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
                            <MenuItemCard item={it} onClick={onItemClick} />
                        </div>
                    ))}
                </div>

                <div className="mt-6 h-px w-full bg-white/10" />
            </div>
        </section>
    );
};
