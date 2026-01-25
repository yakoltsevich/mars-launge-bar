import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

type Props = {
    address: string;
    workTime: string;
};

export const ContactInfoRow = ({ address, workTime }: Props) => {
    return (
        <section className="py-8">
            <div className="mx-auto max-w-[1100px] px-4">
                <div className="rounded-[22px] border border-white/10 bg-black/25 px-8 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.55)] sm:px-12">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-4">
              <span className="mt-[2px] grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/20 text-[#CFA57A]/80">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
                            <div className="text-[14px] leading-6 text-white/70">{address}</div>
                        </div>

                        <div className="flex items-start gap-4">
              <span className="mt-[2px] grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/20 text-[#CFA57A]/80">
                <FontAwesomeIcon icon={faClock} />
              </span>
                            <div className="text-[14px] leading-6 text-white/70">{workTime}</div>
                        </div>
                    </div>

                    <div className="mt-5 h-px w-16 bg-[#B77A45]/70" />
                </div>
            </div>
        </section>
    );
};
