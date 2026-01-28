import {HOME_ATMOSPHERE_DATA} from "./homeAtmosphereData";

export const HomeAtmosphere = () => {
    const {title, text, preview, imageUrl} = HOME_ATMOSPHERE_DATA;

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

                    {/* Right image */}
                    <div className="md:col-span-7">
                        <div className="relative overflow-hidden rounded-[26px] border border-white/10
                        bg-black/30 shadow-[0_18px_70px_rgba(0,0,0,0.65)]">
                            <div className="absolute inset-0">
                                <img
                                    src={imageUrl}
                                    alt=""
                                    className="h-full w-full object-cover opacity-85"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/45"/>
                                <div
                                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.10),rgba(0,0,0,0.90))]"/>
                                <div
                                    className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full
                                    bg-[radial-gradient(circle,rgba(255,170,90,0.18),rgba(255,170,90,0)_60%)] blur-3xl"/>
                            </div>

                            {/* keep aspect similar to screenshot */}
                            <div className="relative h-[260px] sm:h-[300px] md:h-[320px]"/>

                            {/* subtle inner stroke */}
                            <div className="pointer-events-none absolute inset-2 rounded-[22px] border border-white/5"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
