'use client'

import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { NowPlayingSong } from '@/lib/types';

function AnimatedBars() {

  return (
    <div className="w-auto flex items-end overflow-hidden">
      <span
        id="bar1"
        className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75"
      />
      <span
        id="bar2"
        className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500"
      />
      <span
        id="bar3"
        className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80"
      />
    </div>
  );
}

function Ping({ color }: { color: string }) {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className={`
          animate-ping 
          absolute 
          inline-flex 
          h-full 
          w-full 
          rounded-full
          bg-${color}-500
          opacity-75
        `}
      />
      <span
        className={`
          relative 
          inline-flex 
          rounded-full 
          h-2 
          w-2 
          bg-${color}-600
        `}
      />
    </span>
  );
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <div className="flex items-center pt-4 pb-5 space-x-2">
      {data?.songUrl ? (
        <Ping color="green" />
      ) : (
        <Ping color="red" />
      )}
      <div className="inline-flex items-center">
        {data?.songUrl ? (
          <a
            className="text-sm font-medium"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="text-sm font-medium">
            Not Playing
          </p>
        )}
        <span className="text-xs text-gray-500 font-medium mx-2">
          {' – '}
        </span>
        <p className="text-xs text-gray-500 font-medium mt-[2px]">
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  );
}