import axios from "axios";

/**
 * All authentication constants necessary for Spotify's authentication API.
 */
export const AuthenticationDetails = {
    uri: "https://accounts.spotify.com/authorize",
    clientId: "47ddd0ef6418411ebf14c636beab7701",
    responseType: "token",
    redirectUri: "http://localhost:3000/authenticate",
    scopes: "user-read-private",
};

/**
 * A redirect to Spotify's authenticate URI with the necessary authentication details.
 */
export function authenticate() {
    window.location.href = `${AuthenticationDetails.uri}?client_id=${AuthenticationDetails.clientId}&response_type=${AuthenticationDetails.responseType}&redirect_uri=${AuthenticationDetails.redirectUri}&scope=${AuthenticationDetails.scopes}`;
}

export const getToken = async () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const tokenUrl = import.meta.env.VITE_SPOTIFY_TOKEN_URL;

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    try {
        const response = await axios.post(tokenUrl, params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return response.data;
    } catch (error) {
        return error;
    }
};
