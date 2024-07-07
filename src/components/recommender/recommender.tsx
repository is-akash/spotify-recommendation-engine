import "./recommender.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    populateGenreSeeds,
    removeSeedFromSeeds,
} from "../../store/recommendationSlice/recommendationSlice";
import { getAvailableGenreSeeds } from "../../utils/lib/spotify-api/recommendations";
import CombinedSearch from "../combined-search/combined-search";
import { selectReduxState } from "../../store/selectReduxState";
import { SeedSlot } from "../seed-slot/seed-slot";
import RecommendationResults from "../recommendation-results/recommendation-results";

const Recommender: React.FC = () => {
    const dispatch = useDispatch();
    const { access_token, availableGenreSeeds, selectedSeeds } =
        useSelector(selectReduxState);

    useEffect(() => {
        if (!availableGenreSeeds) {
            if (access_token) {
                getAvailableGenreSeeds(access_token)
                    .then((genres: string[]) => {
                        dispatch(populateGenreSeeds(genres));
                    })
                    .catch((err) => {
                        console.log("Error while fetching genres", err);
                    });
            }
        }
    }, [access_token, dispatch, availableGenreSeeds]);

    return (
        <div className='recommender'>
            <header>
                <h1>Recommender Page</h1>
            </header>
            <section className='seeds'>
                <ul className='seed-slots'>
                    {selectedSeeds?.map((seed, index) => (
                        <li
                            key={index}
                            className='slot'
                            onClick={() => dispatch(removeSeedFromSeeds(index))}
                        >
                            <SeedSlot seed={seed} />
                        </li>
                    ))}
                </ul>
                <p>
                    You can select up to 5 seeds to base your recommendations
                    on.
                </p>
                <p>Type any artist, track or genre name.</p>
            </section>
            <section className='tools'>
                <CombinedSearch />
                <RecommendationResults />
            </section>
        </div>
    );
};

export default Recommender;
