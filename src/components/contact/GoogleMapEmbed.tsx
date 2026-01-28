import React from "react";

type Props = {
    query: string;
};

export const GoogleMapEmbed = ({ query }: Props) => {
    const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

    return (
        <section className="pb-14">
            <div className="mx-auto max-w-5xl px-4">
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/10 shadow-[0_18px_70px_rgba(0,0,0,0.55)]">
                    <div className="h-[320px] w-full sm:h-[380px]">
                        <iframe
                            title="Google Map"
                            src={src}
                            className="h-full w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
