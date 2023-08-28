import Link from 'next/link';
import type { Metadata } from 'next';
import { FolderIcon, Layers, Newspaper, Scroll } from "lucide-react";

import { allBlogs } from 'contentlayer/generated';

import ViewCounter from '@/app/blog/view-counter';
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import ProjectLink from "@/components/ui/project-link";
import SocialLink from "@/components/ui/social-link";
import Header from '@/components/header';

import { getViewsCount } from '@/lib/metrics';
import { projectsLinks, socialLinks } from "@/data";

export default async function Home() {
  const allViews = await getViewsCount();

  return (
    <>
      <Header />

      <>
        <section className='my-6'>
          <Subtitle
            label="Posts"
            icon={<Newspaper width={16} height={16} />}
          />
          <div className='mt-2'>
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
                    <p className="ml-1 line-clamp-1 webkit-line-clamp-1">
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
        <section className='my-6'>
          <Subtitle
            label="Projects"
            icon={<FolderIcon width={16} height={16} />}
          />
          <div className='mt-2'>
            {projectsLinks.map((project) => (
              <ProjectLink
                key={project.label}
                link={project.link}
                label={project.label}
              />
            ))}
          </div>
        </section>
        <section className='my-6'>
          <Subtitle
            label="Social"
            icon={<FolderIcon width={16} height={16} />}
          />
          <div className='mt-2'>
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
    </>
  );
}