import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";


type AddressItemProps = {
    value: string;
    icon: IconProp;
};

const AddressItem = ({value, icon}: AddressItemProps) => {
    return (
        <div className="flex items-center gap-4">
              <span
                  className=" grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/20 text-[#CFA57A]/80">
                <FontAwesomeIcon icon={icon}/>
              </span>
            <div className="text-[14px] leading-6 text-white/70">{value}</div>
        </div>
    )
}

type ContactInfoRowProps = {
    address: string;
    workTime: string;
};
export const ContactInfoRow = ({address, workTime}: ContactInfoRowProps) => {
    return (
        <div
            className="border border-white/10 shadow-[0_18px_70px_rgba(0,0,0,0.55)] rounded-3xl
            flex items-center justify-center gap-6 sm:flex-wrap p-6 px-12">
            <AddressItem icon={faLocationDot} value={address}/>
            <AddressItem icon={faClock} value={workTime}/>
        </div>
    );
};
