import Link from "next/link";
import { Scroll } from "lucide-react";
import ViewCounter from "@/app/blog/view-counter";

type PostLinkProps = {
    slug: string;
    previewTitle: string;
    allViews: {
        slug: string;
        count: number;
    }[]
}

const PostLink = ({ slug, previewTitle, allViews }: PostLinkProps) => {
    return (
        <Link
            key={slug}
            href={`/blog/${slug}`}
            className="
                flex 
                justify-between
                items-center
                gap-1
                text-sm 
                font-medium
                py-1
                px-1.5
                rounded-md
                hover:bg-accent 
                transition
            "
        >
            <div className="flex items-center gap-1.5">
                <Scroll width={14} height={14} className="min-w-[14px]" />
                <p className="line-clamp-1 webkit-line-clamp-1">
                    {previewTitle}
                </p>
            </div>
            <ViewCounter
                allViews={allViews}
                slug={slug}
                trackView={false}
            />
        </Link>
    );
}

export default PostLink;