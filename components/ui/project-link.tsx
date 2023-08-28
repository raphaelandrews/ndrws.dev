import { ExternalLink, Globe } from "lucide-react";

type ProjectLinkProps = {
    link: string;
    label: string;
}

const ProjectLink = ({ link, label }: ProjectLinkProps) => {
    return (
        <a
            href={link}
            target="_blank"
            className="
                flex 
                justify-between
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
            <div className=" flex items-center gap-1.5">
                <Globe width={14} height={14} className="min-w-[14px]" />
                <span className="line-clamp-1 webkit-line-clamp-1">
                    {label}
                </span>
            </div>
            <ExternalLink width={14} height={14} />
        </a>
    );
}

export default ProjectLink;