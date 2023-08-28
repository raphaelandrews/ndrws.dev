export default function Track(track) {
  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex 
        justify-between
        items-center
        text-sm 
        font-medium
        py-1
        px-1.5
        rounded-md
        hover:bg-accent 
        transition
      "
    >
      <p>
        {track.title}
      </p>
      <p className="text-xs text-gray-500">
        {track.artist}
      </p>
    </a>
  );
}