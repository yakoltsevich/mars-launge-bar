"use client";

import React, {useMemo, useState} from "react";
import Image from "next/image";
import {MenuItem} from "@/types/menu";
import {useDict} from "@/components/i18n/I18nProvider";
import {tByKey} from "@/shared/helpers/tByKey";

type Props = {
    item: MenuItem;
};

const FALLBACK_URL =
    "https://foodfriends.ru/assets/image-cache/files/images/old/images/ff-images/%D0%A0%D0%95%D0%A6%D0%95%D0%9F%D0%A2%D0%AB/168ed8e4d2b30c8f198d2447a59b2c14.fa022fde.jpg";

export const MenuItemCard = ({item}: Props) => {
    const dict = useDict();
    // Важно: без "/public"
    const imageSrc = useMemo(
        () => `/images/menu/${item.categoryId}/${item.id}.png`,
        [item.categoryId, item.id]
    );

    const [src, setSrc] = useState<string>(imageSrc);

    // если item поменялся (карточка переиспользована), обновим src
    React.useEffect(() => {
        setSrc(imageSrc);
    }, [imageSrc]);

    return (
        <button
            type="button"
            className="group relative w-full sm:w-[260px] shrink-0 text-left
      overflow-hidden rounded-[18px] border border-white/10 bg-black/35
      shadow-[0_8px_7px_rgba(0,0,0,0.65)] transition hover:border-white/15 cursor-pointer h-full flex flex-col "
        >
            <div className="relative min-h-[260px] aspect-square w-full">
                <Image
                    src={src}
                    alt={tByKey(dict, item.nameKey) ?? ""}
                    fill
                    className="object-contain opacity-90 transition duration-500"
                    onError={() => setSrc(FALLBACK_URL)}
                />
            </div>

            <div className="p-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="line-clamp-2 text-[16px] text-white/85">
                        {tByKey(dict, item.nameKey)}
                    </div>

                    {item.price && (
                        <div className="text-[15px] text-white/65">
                            {item.price.amount} {item.price.currency}
                        </div>
                    )}
                </div>

                {item.descriptionKey && (
                    <div className="mt-3 line-clamp-4 text-[13px] text-white/45">
                        {tByKey(dict, item.descriptionKey)}
                    </div>
                )}
            </div>
        </button>
    );
};
