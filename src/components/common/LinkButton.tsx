import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";


const buildPhoneLink = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
const buildEmailLink = (email: string) => `mailto:${email}`;

const BTN_TYPE = {
    phone: {
        icon: faPhone,
        linkBuilder: buildPhoneLink
    },
    email: {
        icon: faEnvelope,
        linkBuilder: buildEmailLink
    }

}
type LinkButtonProps = {
    type: 'phone' | 'email';
    value: string;
};
export const LinkButton = ({type, value,}: LinkButtonProps) => {

    return (
        <div className='flex text-sm items-center gap-4'>
            <FontAwesomeIcon size='1x' icon={BTN_TYPE[type].icon}/>
            <Link href={BTN_TYPE[type].linkBuilder(value)}
                  className="text-[14px] text-white/75 hover:text-white transition">
                {value}
            </Link>
        </div>
    );
};
