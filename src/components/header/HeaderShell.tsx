import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const HeaderShell = ({children}: Props) => {
    return (
        <div
            className="
        flex h-14 items-center justify-between
        rounded-2xl border border-white/10
        bg-black/35 backdrop-blur-md
        shadow-[0_10px_40px_rgba(0,0,0,0.55)]
      "
        >
            {children}
        </div>
    );
};
