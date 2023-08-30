import { Balancer } from 'react-wrap-balancer';

import { allBlogs } from 'contentlayer/generated';

import { getViewsCount } from '@/lib/metrics';
import { projectsLinks, socialLinks } from "@/data";

import Subtitle from "@/components/ui/subtitle";
import ProjectLink from "@/components/ui/project-link";
import SocialLink from "@/components/ui/social-link";
import PostLink from '@/components/ui/post-link';
import TopTracks from '@/components/top-tracks';
import TopArtists from '@/components/top-artists';
import NowPlaying from '@/components/now-playing';
import CopyContent from '@/lib/copy-content';

export default async function Home() {
  const allViews = await getViewsCount();

  return (
    <>
      <section className='my-10'>
        <Subtitle label="Intro" />
        <p className='text-sm font-medium'>
          <Balancer>
            Hey, I'm Andrews, a Fullstack Web Developer specialized in Frontend
            based in Brazil. You can contact me on any {" "}
            <a href="#social" className='text-gray-400'>social media</a> or by
            {" "}
            <span className='hover:cursor-pointer'>
              <CopyContent
                title='Email'
                label='email'
                content='ndrws.dev@gmail.com'
              />
            </span>.
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
        <Subtitle label="Projects" />
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