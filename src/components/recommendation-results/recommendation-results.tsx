import { useSelector } from "react-redux";
import "./recommendation-result.scss";
import { selectReduxState } from "../../store/selectReduxState";
import { TrackCard } from "../track-card/track-card";

const RecommendationResults = () => {
    const { recommendationResults } = useSelector(selectReduxState);

    const fetchRecommendation = () => {
        console.log("okay");
    };

    return (
        <div className='recommendation-results'>
            <section className='button'>
                <button onClick={() => fetchRecommendation()}>
                    Recommend something
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
