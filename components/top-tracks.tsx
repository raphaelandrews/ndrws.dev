'use client'

import useSWR from 'swr';
import { Music4 } from 'lucide-react';

import fetcher from '@/lib/fetcher';
import { TopTracks } from '@/lib/types';
import Track from '@/components/track';

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-1.5 text-sm font-medium mb-2">
        <Music4 width={14} height={14} />
        <span>Top Songs</span>
      </div>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </div>
  );
}