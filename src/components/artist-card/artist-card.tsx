import { Artist } from "../../interfaces";
import "./artist-card.scss";

interface ArtistCardProps {
    artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
    return (
        <>
            <div className='artist-info'>
                <img src={artist.images[0]?.url} />
                <h3>{artist.name}</h3>
            </div>
            <p className='artist-genres'>
                {artist.genres.map((genre) => (
                    <span key={genre}>{genre}</span>
                ))}
            </p>
        </>
    );
}
