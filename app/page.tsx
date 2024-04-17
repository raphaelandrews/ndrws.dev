import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Balancer } from 'react-wrap-balancer';

import { allBlogs } from 'contentlayer/generated';

import { projectsLinks, socialLinks } from "@/data";
import { createClient } from "@/utils/supabase/server";
import { Views } from "@/types/global";

import NowPlaying from '@/components/now-playing';
import PostLink from '@/components/ui/post-link';
import ProjectLink from "@/components/ui/project-link";
import SocialLink from "@/components/ui/social-link";
import Subtitle from "@/components/ui/subtitle";
import TopArtists from '@/components/top-artists';
import TopTracks from '@/components/top-tracks';

export default async function Home() {
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
    <>
      <section className='my-10'>
        <Subtitle label="Intro" />
        <p className='text-sm font-medium'>
          <Balancer>
            👋 Hey, I'm Andrews, a Fullstack Web Developer specialized in
            Frontend based in Brazil. You can contact me on any {" "}
            <a href="#social" className='text-gray-400'>social media</a> or by
            email: {" "}
            <a href="mailto:hey@ndrws.dev" className='text-gray-400'>
              hey@ndrws.dev
            </a>.
          </Balancer>
        </p>
      </section>
      <section className='my-10'>
        <Subtitle label="Posts" />
        <div className='space-y-1'>
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <PostLink
                key={post.slug}
                slug={post.slug}
                previewTitle={post.previewTitle}
                allViews={allViews}
              />
            ))}
        </div>
      </section>
      <section className='my-10'>
        <Subtitle label="Featured" />
        <div className='space-y-1'>
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
        <Subtitle label="Music" />
        <NowPlaying />
        <TopTracks />
        <TopArtists />
      </section>
      <section className='my-10' id='social'>
        <Subtitle label="Social" />
        <div className='space-y-1'>
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
