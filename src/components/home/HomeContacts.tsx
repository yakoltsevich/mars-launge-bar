'use client'
import Link from "next/link";
import {getContactsInfo} from "@/lib/contacts";
import {useDict} from "@/components/i18n/I18nProvider";
import {tByKey} from "@/shared/helpers/tByKey";

export const HomeContacts = () => {
    const contactsInfo = getContactsInfo()
    const dict = useDict();

    const {address, phone, email, socials} = contactsInfo;
    const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;
    const emailHref = `mailto:${email}`;

    return (
        <section>
                <div className="overflow-hidden rounded-[28px] border border-white/10
            bg-black/35 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.65)]"
                >
                    <div className="px-8 py-10 sm:px-12">
                        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                            {/* Title + accent */}
                            <div className="md:max-w-[360px]">
                                <h2 className="text-[24px] tracking-[0.22em] uppercase text-white/85">
                                    {tByKey(dict, 'contacts.title')}
                                </h2>
                                <div className="mt-4 h-px w-16 bg-[#B77A45]/70"/>
                                <p className="mt-5 text-[14px] leading-6 text-white/55">
                                    {tByKey(dict, 'contacts.text')}
                                </p>
                                <div className="mt-5  tracking-[0.22em] text-[14px] leading-6 text-white/55">
                                    <p>Mon - Thu: 16:00 - 00:00</p>
                                    <p>Fri - Sun: 16:00 - 03:00</p>
                                </div>
                            </div>

                            {/* Contacts list */}
                            <div className="grid gap-4 md:min-w-[420px]">
                                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                                    <div className="text-[11px] tracking-[0.18em] uppercase text-white/45">
                                        {tByKey(dict, 'contacts.address')}
                                    </div>
                                    <div className="mt-2 text-[14px] text-white/80">{address}</div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                                        <div className="text-[11px] tracking-[0.18em] uppercase text-white/45">
                                            {tByKey(dict, 'contacts.phone')}
                                        </div>
                                        <Link
                                            href={phoneHref}
                                            className="mt-2 inline-block text-[14px] text-white/80 hover:text-white transition"
                                        >
                                            {phone}
                                        </Link>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                                        <div className="text-[11px] tracking-[0.18em] uppercase text-white/45">
                                            {tByKey(dict, 'contacts.email')}
                                        </div>
                                        <Link
                                            href={emailHref}
                                            className="mt-2 inline-block text-[14px] text-white/80 hover:text-white transition"
                                        >
                                            {email}
                                        </Link>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                                    <div className="text-[11px] tracking-[0.18em] uppercase text-white/45">
                                        {tByKey(dict, 'contacts.socials.title')}
                                    </div>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {socials.map((s) => {
                                            console.log('s', s)
                                            return (
                                                <a
                                                    key={s.type}
                                                    href={s.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="
                          rounded-xl border border-white/10
                          bg-black/20 px-3 py-2
                          text-[12px] tracking-[0.14em] uppercase
                          text-white/70 hover:text-white
                          hover:bg-white/5 transition
                        "
                                                >
                                                    {tByKey(dict, `contacts.socials.${s.type}`)}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* subtle bottom line */}
                    <div className="h-px w-full bg-white/10"/>

                    {/* footer strip (optional, matches vibe) */}
                    {/*<div className="px-8 py-4 sm:px-12">*/}
                    {/*    <div className="text-[11px] tracking-[0.16em] uppercase text-white/40">*/}
                    {/*        {tByKey(dict, 'contacts.footer')}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
        </section>
    );
};
