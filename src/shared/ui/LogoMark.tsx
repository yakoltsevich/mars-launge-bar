import React from "react";

export const LogoMark = ({ className = "h-6 w-6" }: { className?: string }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M8.2 13.2c-1.6-1.3-2.4-3-2.4-4.8C5.8 5.7 8 3.5 10.8 3.5c2.9 0 5.1 2.2 5.1 4.9 0 2.4-1.7 4.5-4.2 4.9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
            />
            <path
                d="M14.1 13.3c2.7.2 4.9 2.2 4.9 4.8 0 1.5-.7 2.8-1.8 3.7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
            />
            <path
                d="M6.2 21c-1.3-.9-2.2-2.3-2.2-3.9 0-2.1 1.5-3.9 3.6-4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
            />
            <path
                d="M9 20.5h6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
            />
        </svg>
    );
};
