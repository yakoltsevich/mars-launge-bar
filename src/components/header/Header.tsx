import Link from "next/link";
import {NAV_LINKS} from "@/shared/config/nav";
import {LogoMark} from "@/shared/ui/LogoMark";
import {LocaleSwitcher} from "@/components/common/LocaleSwitcher";

export const Header = () => {
    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto max-w-[1100px] px-4 pt-4">
                <div
                    className="
            flex h-14 items-center justify-between
            rounded-2xl border border-white/10
            bg-black/35 backdrop-blur-md
            shadow-[0_10px_40px_rgba(0,0,0,0.55)]
          "
                >
                    {/* Left: logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-5 text-white/90 hover:text-white transition"
                        aria-label="На главную"
                    >
            <span className="grid place-items-center rounded-xl border border-white/10 bg-white/5 p-2">
              <LogoMark className="h-5 w-5"/>
            </span>

                        <span className="text-[12px] tracking-[0.22em] uppercase">
              Your Logo
            </span>
                    </Link>

                    {/* Right: nav + phone */}
                    <div className="flex items-center gap-2 pr-3">
                        <nav className="hidden items-center gap-1 md:flex">
                            {NAV_LINKS.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="
                    rounded-xl px-3 py-2 text-[12px] tracking-[0.18em] uppercase
                    text-white/70 hover:text-white
                    hover:bg-white/5 transition
                  "
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mx-2 hidden h-6 w-px bg-white/10 md:block"/>

                        <LocaleSwitcher></LocaleSwitcher>
                        <button
                            type="button"
                            className="ml-1 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5
                text-white/80 hover:text-white hover:bg-white/10 transition
                md:hidden
              "
                            aria-label="Открыть меню"
                        >
                            <span className="block h-[2px] w-5 bg-current opacity-90"/>
                            <span className="mt-1 block h-[2px] w-5 bg-current opacity-65"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
