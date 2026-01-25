"use client";

import React from "react";

export type MenuItemCardData = {
    id: string;
    title: string;
    desc?: string;
    price?: number;
    currency?: string;
    imageUrl: string;
};

type Props = {
    item: MenuItemCardData;
    onClick?: (item: MenuItemCardData) => void;
};

export const MenuItemCard = ({ item, onClick }: Props) => {
    return (
        <button
            type="button"
            onClick={() => onClick?.(item)}
            className="
        group relative w-[260px] shrink-0 text-left
        overflow-hidden rounded-[18px]
        border border-white/10 bg-black/25
        shadow-[0_18px_70px_rgba(0,0,0,0.65)]
        transition
        hover:border-white/15
      "
        >
            {/* image */}
            <div className="relative h-[138px]">
                <img
                    src={item.imageUrl}
                    alt=""
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/35" />
            </div>

            <div className="px-4 py-4">
                <div className="flex justify-between gap-3">
                    <div className="line-clamp-2 text-[16px] text-white/85">
                        {item.title}
                    </div>

                    {typeof item.price === "number" && (
                        <div className="text-[14px] text-white/65">
                            {item.price} {item.currency}
                        </div>
                    )}
                </div>

                {item.desc && (
                    <div className="mt-3 line-clamp-2 text-[12px] text-white/45">
                        {item.desc}
                    </div>
                )}
            </div>
        </button>
    );
};
