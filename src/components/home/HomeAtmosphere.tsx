'use client'
import {HOME_ATMOSPHERE_DATA} from "./homeAtmosphereData";
import Image from "next/image";
import {useDict} from "@/components/i18n/I18nProvider";
import {HomeMenuPreview} from "@/components/home/HomeMenuPreview";
import {HomeContacts} from "@/components/home/HomeContacts";
import {AtmosphereSlider} from "@/components/common/AtmosphereSlider";

export const HomeAtmosphere = () => {
    const {title, text, preview, imageUrl} = HOME_ATMOSPHERE_DATA;
    const dict = useDict();

    return (
        <section className="py-14">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-8 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-5">
                        <h2 className="text-[24px] tracking-[0.22em] uppercase text-white/85">
                            {title}
                        </h2>

                        <p className="mt-5 text-[14px] leading-6 text-white/60">{text}</p>

                        <div className="mt-7 inline-flex items-center gap-3
                rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md
                shadow-[0_14px_50px_rgba(0,0,0,0.55)] px-3 py-3"
                        >
                            <div className="relative h-12 w-20 overflow-hidden rounded-xl border border-white/10">
                                <img
                                    src={preview.imageUrl}
                                    alt=""
                                    className="h-full w-full object-cover opacity-90"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/25"/>
                            </div>

                            <div className="min-w-0">
                                <div className="text-[11px] tracking-[0.18em] uppercase text-white/70">
                                    {preview.label}
                                </div>
                                <div className="mt-1 h-px w-10 bg-[#B77A45]/60"/>
                            </div>
                        </div>
                    </div>
                    <AtmosphereSlider
                        slides={[
                            {src: '/images/common/bar.jpg', alt: 'Mars lounge interior 1'},
                            {src: '/images/common/bar2.jpg', alt: 'Mars lounge interior 2'},
                            {src: '/images/common/outside.jpg', alt: 'Mars lounge interior 3'},
                            {src: '/images/common/shisha.jpg', alt: 'Mars lounge interior 3'},
                            {src: '/images/common/vip-room.jpg', alt: 'Mars lounge interior 3'},
                        ]}
                        aspect="16/9"
                        className="w-full max-w-[320px] sm:max-w-[620px] md:col-span-7"
                    />
                    {/* Right image */}
                    {/*<div className="md:col-span-7">*/}
                    {/*    <div className="relative overflow-hidden rounded-[26px] border border-white/10*/}
                    {/*    bg-black/30 shadow-[0_18px_70px_rgba(0,0,0,0.65)]">*/}
                    {/*        <div className="absolute inset-0">*/}
                    {/*            <Image*/}
                    {/*                src='/images/common/hall.png'*/}
                    {/*                width={600} height={400}*/}
                    {/*                alt=""*/}
                    {/*                className="h-full w-full object-cover opacity-85"*/}
                    {/*            />*/}
                    {/*        </div>*/}

                    {/*        /!* keep aspect similar to screenshot *!/*/}
                    {/*        <div className="relative h-[260px] sm:h-[300px] md:h-[320px]"/>*/}

                    {/*        /!* subtle inner stroke *!/*/}
                    {/*        <div className="pointer-events-none absolute inset-2 rounded-[22px] border border-white/5"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};
