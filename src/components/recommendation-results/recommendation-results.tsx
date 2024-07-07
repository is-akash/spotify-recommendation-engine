import { useSelector } from "react-redux";
import "./recommendation-result.scss";
import { selectReduxState } from "../../store/selectReduxState";
import { TrackCard } from "../track-card/track-card";
import { fetchRecommendationResults } from "../../utils/lib/spotify-api/recommendations";
import { Track } from "../../interfaces";
import { useDispatch } from "react-redux";
import {
    setRecommendationResults,
    setReset,
} from "../../store/recommendationSlice/recommendationSlice";
import { clearAccessToken } from "../../store/authSlice/authSlice";

const RecommendationResults = () => {
    const dispatch = useDispatch();

    const { recommendationResults } = useSelector(selectReduxState);

    const fetchRecommendation = () => {
        fetchRecommendationResults()
            .then((data: Track[]) => {
                dispatch(setRecommendationResults(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='recommendation-results'>
            <section className='button'>
                <button onClick={() => fetchRecommendation()}>
                    Recommend something
                </button>
                <button onClick={() => dispatch(setReset())}>
                    Reset Everything
                </button>
                <button onClick={() => dispatch(clearAccessToken())}>
                    Logout
                </button>
            </section>
            <ul className='tracks'>
                {recommendationResults?.length === 0 ? (
                    <span>No results</span>
                ) : (
                    recommendationResults?.map((track) => (
                        <li key={track.id}>
                            <TrackCard track={track} />
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default RecommendationResults;
