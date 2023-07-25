import { Globe } from "lucide-react";

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
                items-center
                gap-1 
                text-sm 
                font-medium
                py-1 
                hover:underline 
                hover:cursor-pointer
            "
        >
            <Globe width={14} height={14} className="min-w-[14px]" />
            <span className="line-clamp-1 webkit-line-clamp-1">
                {label}
            </span>
        </a>
    );
}

export default ProjectLink;