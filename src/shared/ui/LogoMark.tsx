import React from "react";
import Image from "next/image";

export const LogoMark = ({ className = "h-6 w-6" }: { className?: string }) => {
    return (
        <Image
            src={'/images/common/logo.png'}
            width={120} height={20}
            alt="Logo"
        />
    );
};
