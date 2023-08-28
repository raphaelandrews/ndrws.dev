import Link from 'next/link';
import { Scroll } from "lucide-react";

import { allBlogs } from 'contentlayer/generated';

import ViewCounter from '@/app/blog/view-counter';
import Subtitle from "@/components/ui/subtitle";
import ProjectLink from "@/components/ui/project-link";
import SocialLink from "@/components/ui/social-link";

import { getViewsCount } from '@/lib/metrics';
import { projectsLinks, socialLinks } from "@/data";

export default async function Home() {
  const allViews = await getViewsCount();

  return (
    <>
      <section className='my-10'>
        <Subtitle label="Posts" />
        <div className='mt-2 space-y-1'>
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
                href={`/blog/${post.slug}`}
                className="
                    flex 
                    md:justify-between
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
                <div
                  className="
                      flex 
                      items-center 
                  "
                >
                  <Scroll width={14} height={14} className="min-w-[14px]" />
                  <p className="ml-1.5 line-clamp-1 webkit-line-clamp-1">
                    {post.previewTitle}
                  </p>
                </div>
                <ViewCounter
                  allViews={allViews}
                  slug={post.slug}
                  trackView={false}
                />
              </Link>
            ))}
        </div>
      </section>
      <section className='my-10'>
        <Subtitle label="Projects" />
        <div className='mt-2 space-y-1'>
          {projectsLinks.map((project) => (
            <ProjectLink
              key={project.label}
              link={project.link}
              label={project.label}
            />
          ))}
        </div>
      </section>
      <section className='my-10'>
        <Subtitle label="Social" />
        <div className='mt-2 space-y-1'>
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              link={link.link}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </section>
    </>
  );
}