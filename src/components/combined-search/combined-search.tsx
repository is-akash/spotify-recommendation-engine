import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { fetchSearchItems, setSeed } from "../../store/recommendations/actions";
import { SearchTypes } from "../../utils/lib/spotify-api/search";
import { Artist } from "../../interfaces/spotify/artist";
import { Track } from "../../interfaces/spotify/track";
import { capitalize } from "../../utils/capitalize";
import "./combined-search.scss";
import { ArtistCard } from "../artist-card/artist-card";
import { TrackCard } from "../track-card/track-card";

const CombinedSearch: React.FC = () => {
    const dispatch = useDispatch();
    const access_token = useSelector(
        (state: RootState) => state.authentication.access_token
    );
    const foundArtists = useSelector(
        (state: RootState) => state.recommendation.foundArtists
    );
    const foundTracks = useSelector(
        (state: RootState) => state.recommendation.foundTracks
    );
    const genres = useSelector(
        (state: RootState) => state.recommendation.availableGenreSeeds
    );
    const activeSeedSlot = useSelector(
        (state: RootState) => state.recommendation.activeSeedSlot
    );

    const [searchValue, setSearchValue] = useState("");

    const debouncedSearch = useCallback(
        debounce((query: string) => {
            dispatch(
                fetchSearchItems(query, [SearchTypes.Artist, SearchTypes.Track])
            );
            setSearchValue(query);
        }, 500),
        [dispatch]
    );

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    const inputChange = (value: string) => {
        debouncedSearch(value);
    };

    const matchingGenres = genres?.filter((genre) =>
        searchValue ? genre.includes(searchValue) : false
    );

    return (
        <div className='combined-search'>
            <input
                type='text'
                onChange={(e) => inputChange(e.target.value)}
            ></input>
            <section className='search-results'>
                <div className='artist'>
                    <label>Artists</label>
                    {foundArtists?.length === 0 ? (
                        <span>No artists found</span>
                    ) : (
                        foundArtists?.map((artist) => (
                            <li
                                key={artist.id}
                                onClick={() =>
                                    dispatch(setSeed(artist, activeSeedSlot!))
                                }
                            >
                                <ArtistCard artist={artist} />
                            </li>
                        ))
                    )}
                </div>

                <ul className='track'>
                    <label>Tracks</label>
                    {foundTracks?.length === 0 ? (
                        <span>No tracks found</span>
                    ) : (
                        foundTracks?.map((track) => (
                            <li
                                key={track.id}
                                onClick={() =>
                                    dispatch(setSeed(track, activeSeedSlot!))
                                }
                            >
                                <TrackCard track={track} />
                            </li>
                        ))
                    )}
                </ul>

                <ul className='genre'>
                    <label>Genres</label>
                    {matchingGenres?.length === 0 && searchValue ? (
                        <span>No genres found</span>
                    ) : (
                        genres
                            ?.filter((genre) =>
                                searchValue
                                    ? genre.includes(searchValue)
                                    : false
                            )
                            ?.map((genre) => (
                                <li
                                    key={genre}
                                    onClick={() =>
                                        dispatch(
                                            setSeed(genre, activeSeedSlot!)
                                        )
                                    }
                                >
                                    <h3>{capitalize(genre)}</h3>
                                </li>
                            ))
                    )}
                </ul>
            </section>
        </div>
    );
};

export default CombinedSearch;
