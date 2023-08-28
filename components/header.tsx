import { Github, Linkedin, Twitter } from "lucide-react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const SocialLink = () => {
    return (
        <a
            href="https://twitter.com/_ndrws"
            target="_blank"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-md"
        >
            <Twitter width={16} height={16} fill="black" />
        </a>
    )
}

const Header = () => {
    return (
        <header className="flex mb-5 md:mb-10 items-center">
            <Logo />
            <nav className="flex gap-1 md:gap-2 text-xs grow justify-end items-center">
                <a
                    href="https://twitter.com/_ndrws"
                    target="_blank"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-md"
                >
                    <Twitter width={16} height={16} fill="black" />
                </a>
                <a
                    href="https://github.com/raphaelandrews"
                    target="_blank"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-md"
                >
                    <Github width={16} height={16} />

                </a>
                <a
                    href="https://www.linkedin.com/in/raphael-andrews"
                    target="_blank"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-md"
                >
                    <Linkedin width={16} height={16} />

                </a>
                <ThemeToggle />
            </nav>
        </header>
    );
}

export default Header;