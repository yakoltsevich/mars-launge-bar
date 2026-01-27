"use client";

import React from "react";
import {MenuItem} from "@/types/menu";
import {useDict} from "@/components/i18n/I18nProvider";
import {tByKey} from "@/shared/helpers/tByKey";


type Props = {
    item: MenuItem;
};

export const MenuItemCard = ({item}: Props) => {
    const imgSrc = 'https://foodfriends.ru/assets/image-cache/files/images/old/images/ff-images/%D0%A0%D0%95%D0%A6%D0%95%D0%9F%D0%A2%D0%AB/168ed8e4d2b30c8f198d2447a59b2c14.fa022fde.jpg'
    const dict = useDict();

    return (
        <button
            type="button"
            onClick={() => {
            }}
            className="group relative w-[260px] shrink-0 text-left
        overflow-hidden rounded-[18px] border border-white/10 bg-black/25
        shadow-[0_8px_7px_rgba(0,0,0,0.65)] transition hover:border-white/15 cursor-pointer
      "
        >
            <div className="relative h-[138px]">
                <img
                    src={imgSrc}
                    alt=""
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="px-4 py-4">
                <div className="flex justify-between gap-3">
                    <div className="line-clamp-2 text-[16px] text-white/85">
                        {tByKey(dict, item.nameKey)}
                    </div>

                    {item.price && (
                        <div className="text-[14px] text-white/65">
                            {item.price.amount} {item.price.currency}
                        </div>
                    )}
                </div>

                {item.descriptionKey && (
                    <div className="mt-3 line-clamp-2 text-[12px] text-white/45">
                        {tByKey(dict, item.descriptionKey)}
                    </div>
                )}
            </div>
        </button>
    );
};
