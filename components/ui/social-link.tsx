import { Globe } from "lucide-react";

type SocialLinkProps = {
    link: string;
    label: string;
    icon: React.ReactNode;
}

const SocialLink = ({ link, label, icon }: SocialLinkProps) => {
    return (
        <a
            href={link}
            target="_blank"
            className="
                flex 
                items-center
                gap-1 
                text-sm 
                font-medium
                py-1 
                hover:underline 
                hover:cursor-pointer
            "
        >
            {icon}
            <span className="line-clamp-1 webkit-line-clamp-1">
                {label}
            </span>
        </a>
    );
}

export default SocialLink;