import { Bird, BoomBox, Github, Linkedin, Mail, MapPin } from "lucide-react"

export const projectsLinks = [
    {
        link: "https://fsx.org.br",
        label: "federacao-sergipana-de-xadrez.html",
    },
    {
        link: "https://timeline-portfolio.vercel.app",
        label: "timeline-portfolio.html",
    },
    {
        link: "https://fsx.org.br/nordestao",
        label: "nordestao-landing-page.html",
    },
]

export const clonesLinks = [
    {
        link: "https://rentbnb-next.vercel.app",
        label: "Airbnb",
        icon: <MapPin width={14} height={14} className="min-w-[14px]" />,
    },
    {
        link: "https://spotify-next-raphaelandrews.vercel.app",
        label: "Spotify",
        icon: <BoomBox width={14} height={14} className="min-w-[14px]" />,
    },
    {
        link: "https://twitter-next-raphaelandrews.vercel.app",
        label: "Twitter",
        icon: <Bird width={14} height={14} className="min-w-[14px]" />,
    }
]

export const socialLinks = [
    {
        link: "mailto:ndrws.dev@gmail.com",
        label: "Gmail",
        icon: <Mail width={14} height={14} className="min-w-[14px]" />,
    },
    {
        link: "https://github.com/raphaelandrews",
        label: "GitHub",
        icon: <Github width={14} height={14} className="min-w-[14px]" />,
    },
    {
        link: "https://www.linkedin.com/in/raphael-andrews/",
        label: "Linkedin",
        icon: <Linkedin width={14} height={14} className="min-w-[14px]" />,
    },
]