import "./home.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/lib/spotify-api/authentication";
import { useUserContext } from "../../context";
import { SpotifyApiResponse } from "../../interfaces";
import { useDispatch } from "react-redux";
import {
    clearAccessToken,
    setAccessToken,
} from "../../store/authSlice/authSlice";
import { isAuthenticated } from "../../utils/utils";
import { AppDispatch, persistor } from "../../store/store";
import { Link } from "react-router-dom";

const Home = () => {
    const { isLoading, setIsLoading } = useUserContext();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const handleAuthenticate = async () => {
        setIsLoading(true);
        await getToken()
            .then((data: SpotifyApiResponse) => {
                setIsLoading(false);
                dispatch(setAccessToken(data));
                navigate("/recommender");
            })
            .catch((err) => {
                console.error("Error getting token:", err);
            });
    };

    useEffect(() => {
        console.log(isAuthenticated());
        if (isAuthenticated()) {
            navigate("/recommender");
        } else {
            dispatch(clearAccessToken());
            persistor.purge().then(() => {
                console.log("state is purged!");
            });
        }
    }, [navigate, dispatch]);

    return (
        <section className='content'>
            <header>
                <Link to={"/"} className='link'>
                    <h1>Spotify Recommendation Engine</h1>
                </Link>
            </header>
            <section className='info'>
                <p>
                    This application requires permission to search the spotify
                    library for tracks/artists/genres. For that we require your
                    authorization.
                </p>
            </section>
            <section className='authorization'>
                <button onClick={() => handleAuthenticate()}>
                    Click here to get started!
                </button>
                {isLoading && <p>Authenticating with spotify..</p>}
                {isLoading && <p>Please wait.</p>}
            </section>
        </section>
    );
};

export default Home;
