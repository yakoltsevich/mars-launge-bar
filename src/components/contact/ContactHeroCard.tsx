import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faLock, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
import {LinkButton} from "@/components/common/LinkButton";

type Social = {
    type: string;
    label: string;
    href: string;
};

type Props = {
    title: string;
    placeCode: string;
    address: string;
    phone: string;
    email: string;
    socials: Social[];
    heroImageUrl: string;
};

const getSocialIcon = (type: Social["type"]) => {
    if (type === "instagram") return faInstagram;
    if (type === "vk") return faVk;
    if (type === "telegram") return faTelegram;
    return null;
};

export const ContactHeroCard = ({
                                    title,
                                    placeCode,
                                    address,
                                    phone,
                                    email,
                                    socials,
                                    heroImageUrl,
                                }: Props) => {
    const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;
    const emailHref = `mailto:${email}`;

    return (
        <section className="pt-24">
            <div className="mx-auto max-w-5xl px-4 h-96 ">
                {/* header strip */}
                <div className="relative border-white/10  px-8 py-5 sm:px-12">
                    <h1 className="text-center text-[22px] tracking-[0.22em] uppercase text-white/80">
                        {title}
                    </h1>
                </div>
                <div
                    className="relative overflow-hidden rounded-[28px] border border-white/10
            bg-black/35 shadow-[0_18px_70px_rgba(0,0,0,0.65)] h-full">
                    {/* background */}
                    <div className="absolute inset-0 ">
                        <img
                            src={heroImageUrl}
                            alt=""
                            className="h-full w-full object-cover opacity-85"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/55"/>
                        <div
                            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.12),rgba(0,0,0,0.92))]"/>
                        <div
                            className="absolute -right-20 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,170,90,0.18),rgba(255,170,90,0)_60%)] blur-3xl"/>
                        <div
                            className="absolute right-8 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-3xl"/>
                    </div>


                    {/* content */}
                    <div className="relative px-8 py-10 sm:px-12">
                        <div className="grid gap-6 md:grid-cols-12 md:items-start">
                            <div className="md:col-span-7">
                                <ul className="space-y-4 text-white/80">

                                    <li className="flex items-center gap-4">
                                        <LinkButton type={'phone'} value={phone}/>
                                    </li>

                                    <li className="flex items-center gap-4">
                    <span
                        className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/25 text-[#CFA57A]/80">
                      <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                                        <Link href={emailHref}
                                              className="text-[14px] text-white/75 hover:text-white transition">
                                            {email}
                                        </Link>
                                    </li>

                                    <li className="flex items-center gap-3 pt-1">
                                        {socials.map((s) => {
                                            const icon = getSocialIcon(s.type);
                                            return (
                                                <a
                                                    key={`${s.type}-${s.label}`}
                                                    href={s.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="
                            inline-flex items-center gap-2
                            rounded-xl border border-white/10
                            bg-black/20 px-3 py-2
                            text-[12px] tracking-[0.14em] uppercase
                            text-white/70 hover:text-white hover:bg-white/5
                            transition
                          "
                                                >
                                                    {icon ? (
                                                        <span className="text-[#CFA57A]/85">
                              <FontAwesomeIcon icon={icon}/>
                            </span>
                                                    ) : (
                                                        <span className="text-[#CFA57A]/85">✦</span>
                                                    )}
                                                    <span>{s.label}</span>
                                                </a>
                                            );
                                        })}
                                    </li>
                                </ul>
                            </div>

                            {/* decorative empty right side (matches layout) */}
                            <div className="hidden md:col-span-5 md:block"/>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-2 rounded-[24px] border border-white/5"/>
                </div>
            </div>
        </section>
    );
};
