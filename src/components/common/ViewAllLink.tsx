"use client";

import Link from "next/link";
import React from "react";

type Props = {
    title?: string;
    href: string;
};

export const ViewAllLink = ({title = 'View all →', href}: Props) => {
    return (
        <Link href={href}
              className="rounded-xl px-3 py-2 text-[12px] tracking-[0.16em]
              uppercase text-[#CFA57A]/75 hover:text-[#CFA57A] hover:bg-white/5 transition">
            {title}
        </Link>
    );
};
