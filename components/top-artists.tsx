'use client'

import useSWR from 'swr';
import { Music4 } from 'lucide-react';

import fetcher from '@/lib/fetcher';
import { TopArtists } from '@/lib/types';
import Artist from '@/components/artist';
import { Skeleton } from '@/components/ui/skeleton';

export default function Artists() {
  const { data } = useSWR<TopArtists>('/api/top-artists', fetcher);

  return (
    <>
      <div className="flex items-center gap-1.5 text-sm font-medium mt-3 mb-2">
        <Music4 width={14} height={14} />
        <span>Top Artists</span>
      </div>
      <div className='space-y-1'>
        {!data ? (
          <>
            <Skeleton className="w-1/2 h-[2rem] rounded-md" />
            <Skeleton className="w-1/2 h-[2rem] rounded-md" />
            <Skeleton className="w-1/2 h-[2rem] rounded-md" />
          </>
        ) : (
          <>
            {data.artists.map((artist, index) => (
              <Artist ranking={index + 1} key={artist.artistUrl} {...artist} />
            ))}
          </>
        )}
      </div>
    </>
  );
}