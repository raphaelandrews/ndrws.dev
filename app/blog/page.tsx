import type { Metadata } from 'next';
import Link from 'next/link';
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { allBlogs } from 'contentlayer/generated';

import ViewCounter from '@/app/blog/view-counter';
import { createClient } from "@/utils/supabase/server";
import { Views } from "@/types/global";

export const metadata: Metadata = {
	title: 'Blog',
};

export default async function BlogPage() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
  
	const { data: allViews, error } = await supabase
	  .from("views")
	  .select(`*`)
	  .returns<Views[]>();
  
	if (!allViews || error || !allViews.length) {
	  notFound;
	}
  
	if (allViews === null) {
	  return
	}

	return (
		<div className="max-w-2xl m-auto">
			<section>
				<h1 className="font-bold text-2xl mb-8 tracking-tighter">My blog posts</h1>
				{allBlogs
					.sort((a, b) => {
						if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
							return -1;
						}
						return 1;
					})
					.map((post) => (
						<Link
							key={post.slug}
							className="flex flex-col space-y-1 mb-4"
							href={`/blog/${post.slug}`}
						>
							<div className="w-full flex flex-col">
								<p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
									{post.title}
								</p>
								<ViewCounter
									allViews={allViews}
									slug={post.slug}
									trackView={false}
								/>
							</div>
						</Link>
					))}
			</section>
		</div>
	);
}
