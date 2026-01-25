export const TablesBigCards = ({ items }: { items: typeof import("./tablesData").TABLES_HERO }) => {
    return (
        <section className="pt-24 pb-16">
            <div className="mx-auto max-w-[1100px] px-4">
                <h1 className="mb-8 text-[28px] tracking-[0.18em] uppercase text-white/85">
                    СТОЛЫ
                </h1>

                <div className="grid gap-6 md:grid-cols-2">
                    {items.map((it) => (
                        <div
                            key={it.id}
                            className="
                rounded-[28px] border border-white/10
                bg-gradient-to-br from-[#5a0f14]/60 to-black/80
                px-10 py-12
                shadow-[0_25px_80px_rgba(0,0,0,0.7)]
              "
                        >
                            <h2 className="text-[26px] tracking-[0.22em] text-white/90">
                                {it.title}
                            </h2>

                            <div className="mt-8 space-y-4 text-[14px] tracking-[0.14em] text-white/70">
                                <div>
                                    <div>{it.weekdays.label}</div>
                                    <div className="text-white/85">
                                        MIN. BILL {it.weekdays.minBill}
                                    </div>
                                </div>

                                <div>
                                    <div>{it.weekend.label}</div>
                                    <div className="text-white/85">
                                        MIN. BILL {it.weekend.minBill}
                                    </div>
                                </div>

                                <div className="pt-4 text-white/60">{it.limit}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center text-[12px] tracking-[0.18em] text-white/55">
                    TIPS INCLUDED FOR GROUPS 6+ PPL. 10%
                </div>
            </div>
        </section>
    );
};
