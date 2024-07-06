import "./combined-search.scss";
import { debounce } from "lodash";
import React, { useState, useCallback, ChangeEvent } from "react";

import { getSearchItems } from "../../utils/lib/spotify-api/search";
import { useDispatch, useSelector } from "react-redux";
import { ArtistCard } from "../artist-card/artist-card";
import { TrackCard } from "../track-card/track-card";
import { SearchTypes } from "../../utils/lib/spotify-api/search";
import {
    setSearchItems,
    setSeed,
} from "../../store/recommendationSlice/recommendationSlice";
import { selectRecommendationState } from "../../store/recommendationSlice/selectRecommendationState";

const CombinedSearch: React.FC = () => {
    const dispatch = useDispatch();
    const {
        access_token,
        foundArtists,
        availableGenreSeeds: genres,
    } = useSelector(selectRecommendationState);
    const [searchValue, setSearchValue] = useState("");

    console.log(foundArtists);

    const searchItems = useCallback(
        (query: string) => {
            if (access_token) {
                setSearchValue(query);
                getSearchItems(access_token, query, [
                    SearchTypes.Artist,
                    SearchTypes.Track,
                ])
                    .then((data) => {
                        console.log(data);
                        const dataTosave = {
                            artists: data.artists.items,
                            tracks: data.tracks.items,
                        };
                        dispatch(setSearchItems(dataTosave));
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        [access_token, dispatch]
    );

    let debounce_fun = debounce((query: string) => {
        searchItems(query);
    }, 500);

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        debounce_fun(value);
    };

    const matchingGenres = genres?.filter((genre) =>
        searchValue ? genre.includes(searchValue) : false
    );

    return (
        <div className='combined-search'>
            <input type='text' onChange={inputChange} />
            <section className='search-results'>
                <div className='artist'>
                    <label>Artists</label>
                    {foundArtists && foundArtists?.length === 0 ? (
                        <span>No artists found</span>
                    ) : (
                        foundArtists?.map((artist, index) => (
                            <li
                                key={artist.id}
                                onClick={() =>
                                    dispatch(setSeed({ seed: artist, index }))
                                }
                            >
                                <ArtistCard artist={artist} />
                            </li>
                        ))
                    )}
                </div>

                <ul className='track'>
                    <label>Tracks</label>
                    {/* {foundTracks?.length === 0 ? (
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
                    )} */}
                </ul>

                <ul className='genre'>
                    <label>Genres</label>
                    {/* {matchingGenres?.length === 0 && searchValue ? (
                        <span>No genres found</span>
                    ) : (
                        matchingGenres?.map((genre) => (
                            <li
                                key={genre}
                                onClick={() =>
                                    dispatch(setSeed(genre, activeSeedSlot!))
                                }
                            >
                                <h3>{genre}</h3>
                            </li>
                        ))
                    )} */}
                </ul>
            </section>
        </div>
    );
};

export default CombinedSearch;
