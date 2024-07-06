import axios from "axios";

/**
 * @returns data = {
    access_token: string;
    expires_in: number;
    token_type: string;
    }
 */

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
        console.log(error);
        return null;
    }
};
