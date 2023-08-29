import { type NextRequest } from 'next/server';
import { getTopArtists } from '@/lib/spotify';

export async function GET(req: NextRequest) {
  const response = await getTopArtists();
  const { items } = await response.json();
console.log(response.body)
  const artists = items.slice(0, 5).map((artist) => ({
    name: artist.name,
    artistUrl: artist.external_urls.spotify,
  }));

  return new Response(JSON.stringify({ artists }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}