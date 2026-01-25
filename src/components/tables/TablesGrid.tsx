import React from "react";
import { TableCard } from "./TableCard";
import type { TableCardData } from "./tablesData";

export const TablesGrid = ({ items }: { items: TableCardData[] }) => {
    return (
        <section className="pt-24 pb-20">
            <div className="mx-auto max-w-[1100px] px-4">
                <h1 className="mb-6 text-[28px] tracking-[0.18em] uppercase text-white/85">
                    СТОЛЫ
                </h1>

                <div className="mb-8 text-[12px] tracking-[0.12em] text-white/45">
                    Home / Столы
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((it) => (
                        <TableCard key={it.id} item={it} />
                    ))}
                </div>
            </div>
        </section>
    );
};
