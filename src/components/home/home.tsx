import { useNavigate } from "react-router-dom";
import { getToken } from "../../api/authentication";
import { useUserContext } from "../../context";
import { login } from "../../store/authentication/actions";
import store from "../../store/store";
import "./home.scss";
import { SpotifyApiResponse } from "../../interfaces";

const Home = () => {
    const { isLoading, setIsLoading } = useUserContext();
    const navigate = useNavigate();
    const handleAuthenticate = async () => {
        setIsLoading(true);
        await getToken()
            .then((data: SpotifyApiResponse) => {
                console.log(data);
                setIsLoading(false);
                localStorage.setItem("spotify_auth", JSON.stringify(data));
                store.dispatch(login(data.access_token, data.expires_in));
                navigate("/recommender");
            })
            .catch((err) => {
                console.error("Error getting token:", err);
            });
    };

    return (
        <section className='content'>
            <header>
                <h1>Some sweet app name</h1>
            </header>
            <section className='info'>
                <p>
                    This application requires permission to search the spotify
                    library for tracks/artists/genres. For that we require your
                    authorization.
                </p>
                <p>
                    By clicking the button below, you will be redirected to
                    Spotify, there you need to login and authorize the app for
                    the mentioned permissions.
                </p>
            </section>
            <section className='authorization'>
                <button onClick={() => handleAuthenticate()}>
                    Click here to authenticate Spotify
                </button>
                {isLoading && <p>Loading...</p>}
            </section>
            <nav>
                <a href='/'>Home</a> |<a href='/about'>About</a>
            </nav>
        </section>
    );
};

export default Home;
