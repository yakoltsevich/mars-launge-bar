import React from "react";
import type { TableCardData } from "./tablesData";

type Props = {
    item: TableCardData;
};

export const TableCard = ({ item }: Props) => {
    const isWide = item.variant === "wide";

    return (
        <div
            className={[
                "overflow-hidden rounded-[22px] border border-white/10 bg-black/30",
                "shadow-[0_18px_60px_rgba(0,0,0,0.6)]",
                "hover:border-white/15 transition",
                isWide ? "sm:col-span-2" : "",
            ].join(" ")}
        >
            {/* image */}
            <div className={isWide ? "relative h-[210px] md:h-[240px]" : "relative h-[150px]"}>
                <img
                    src={item.imageUrl}
                    alt=""
                    className="h-full w-full object-cover opacity-85"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),rgba(0,0,0,0.92))]" />
                <div className="pointer-events-none absolute inset-2 rounded-[18px] border border-white/5" />
            </div>

            {/* content */}
            <div className={isWide ? "px-6 py-6" : "px-5 py-5"}>
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <div className="text-[18px] text-white/85">{item.title}</div>
                        {item.subtitle ? (
                            <div className="mt-2 text-[14px] text-white/60">{item.subtitle}</div>
                        ) : null}
                    </div>

                    {item.priceText ? (
                        <div className="shrink-0 text-[14px] tracking-[0.08em] text-[#CFA57A]">
                            {item.priceText}
                        </div>
                    ) : null}
                </div>

                <div className="mt-3 text-[12px] leading-5 text-white/45">
                    {item.lines.map((line, idx) =>
                        line === "" ? (
                            <div key={idx} className="h-3" />
                        ) : (
                            <div key={idx}>{line}</div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
