import {type ReactNode} from "react";

export const BigCardWrapper = ({children}: { children: ReactNode }) => {
    return (
        <section className="py-7 sm:py-14 mx-auto max-w-7xl px-4">
            <div className="overflow-hidden rounded-[28px] border border-white/10
            bg-black/35 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.65)]"
            >
                {children}
            </div>
        </section>
    )
}