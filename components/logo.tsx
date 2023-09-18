"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
    const pathname = usePathname();

    return (
        <h1 className="md:text-lg whitespace-nowrap font-bold">
            {pathname === "/" ? (
                <span className="cursor-default pr-2">Andrews</span>
            ) : (
                <Link
                    href="/"
                    className="
                        hover:bg-accent 
                        active:bg-accent 
                        p-2 
                        rounded-sm 
                        -ml-2 
                        transition-[background-color]
                    "
                >
                    Andrews
                </Link>
            )}
        </h1>
    );
}