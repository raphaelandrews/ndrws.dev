import { ExternalLink } from "lucide-react";

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
                md:justify-between
                items-center
                text-sm 
                font-medium
                py-1
                px-1.5
                rounded-md
                hover:bg-accent 
                transition
            "
        >
            <div
                className="
                    flex 
                    items-center 
                    gap-1.5
                "
            >
                {icon}
                <span className="line-clamp-1 webkit-line-clamp-1">
                    {label}
                </span>
            </div>
            <ExternalLink width={14} height={14} />
        </a>
    );
}

export default SocialLink;