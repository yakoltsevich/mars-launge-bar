import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type Props = {
    href: string;
    icon: any;
    label: string;
};

export const SocialButton = ({
                                 href,
                                 icon,
                                 label,
                             }: Props) => {
    return (
        <a
            href={href}
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
            {icon && (
                <FontAwesomeIcon className="text-[#CFA57A]/85" icon={icon}/>
            )}
            <span>{label}</span>
        </a>
    );
};
