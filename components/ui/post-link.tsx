import Link from "next/link";
import { Scroll } from "lucide-react";

type PostLinkProps = {
    link: string;
    label: string;
    date: string;
}

const PostLink = ({ link, label, date }: PostLinkProps) => {
    return (
        <Link
            href={link}
            className="
                flex 
                md:justify-between
                items-center
                gap-1 
                text-sm 
                font-medium
                my-1 
            "
        >
            <div
                className="
                    flex 
                    items-center 
                    hover:underline 
                    hover:cursor-pointer
                "
            >
                <Scroll width={14} height={14} className="min-w-[14px]" />
                <span className="ml-1 line-clamp-1 webkit-line-clamp-1">
                    {label}
                </span>
            </div>
            <span className="text-xs text-secondary ml-1">{date}</span>
        </Link>
    );
}

export default PostLink;