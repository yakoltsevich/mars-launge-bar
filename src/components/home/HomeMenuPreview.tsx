import Link from "next/link";
import { HOME_MENU_PREVIEW_DATA } from "./homeMenuPreviewData";
import {DirectionalLink} from "@/components/common/DirectionalLink";
import React from "react";
import {tByKey} from "@/shared/helpers/tByKey";
import Image from "next/image";

export const HomeMenuPreview = () => {
    const { title, viewAll, items } = HOME_MENU_PREVIEW_DATA;

    return (
        <section className="py-14">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-center text-[24px] tracking-[0.22em] uppercase text-white/85">
                    {title}
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((it) => (
                        <Link
                            key={it.href}
                            href={it.href}
                            className="
                group relative overflow-hidden rounded-[22px]
                border border-white/10 bg-black/25
                shadow-[0_18px_70px_rgba(0,0,0,0.65)]
                transition
                hover:border-white/15
              "
                        >
                            {/* background image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={it.imageUrl}
                                    alt=""
                                    fill
                                    className="object-contain opacity-90 transition duration-500"
                                />
                                {/* dark overlay */}
                                {/* vignette */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.10),rgba(0,0,0,0.92))]" />
                            </div>

                            {/* content */}
                            <div className="relative flex h-[170px] items-end p-5">
                                <div className="w-full">
                                    <div className="text-[14px] tracking-[0.12em] text-white/85">
                                        {it.title}
                                    </div>
                                    <div className="mt-3 h-px w-12 bg-[#B77A45]/70" />
                                </div>
                            </div>

                            {/* inner stroke */}
                            <div className="pointer-events-none absolute inset-2 rounded-[18px] border border-white/5" />
                        </Link>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <DirectionalLink href={viewAll.href} title={viewAll.label}/>
                </div>
            </div>
        </section>
    );
};
