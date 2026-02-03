import React from "react";
import {faInstagram, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
import {LinkButton} from "@/components/common/LinkButton";
import {SocialButton} from "@/components/common/SocialButton";

type Social = {
    type: string;
    label: string;
    href: string;
};

type Props = {
    phone: string;
    email: string;
    socials: Social[];
};

const getSocialIcon = (type: Social["type"]) => {
    if (type === "instagram") return faInstagram;
    if (type === "vk") return faVk;
    if (type === "telegram") return faTelegram;
    return null;
};

export const ContactHeroCard = ({
                                    phone,
                                    email,
                                    socials,
                                }: Props) => {

    return (
        <section className="h-96 relative overflow-hidden rounded-3xl border border-white/10
             shadow-[0_18px_70px_rgba(0,0,0,0.65)] ">

            <div className="absolute inset-0 ">
                <div className="absolute inset-0 bg-black/55"/>
                <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.12),rgba(0,0,0,0.92))]"/>
            </div>

            <div className="relative flex flex-col w-full h-full items-start justify-end text-white/80 p-4 gap-2">
                <LinkButton type={'phone'} value={phone}/>
                <LinkButton type={'email'} value={email}/>

                <div className="flex items-center gap-2">
                    {socials.map((s) => {
                        const icon = getSocialIcon(s.type);
                        return <SocialButton
                            key={`${s.type}-${s.label}`}
                            href={s.href}
                            label={s.label}
                            icon={icon}
                        />
                    })}
                </div>
            </div>
        </section>
    );
};
