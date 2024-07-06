import "./track-card.scss";
import { Track } from "../../interfaces/spotify/track";

interface TrackCardProps {
    track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
    return (
        <>
            <div className='track-name'>
                <img src={track.album.images[0]?.url} />
                <h3>{track.name}</h3>
            </div>
            <p className='track-info'>
                <span>{track.artists[0].name}</span>
                <span>{track.album.name}</span>
            </p>
        </>
    );
}
