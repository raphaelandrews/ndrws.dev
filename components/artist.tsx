export default function Artist(artist) {
  return (
    <a
      href={artist.artistUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        flex-col
        justify-between
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
        {artist.name}
      </p>
    </a>
  );
}