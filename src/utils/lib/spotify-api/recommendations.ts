import axios from "axios";
import { store } from "../../../store/store";
import { isString } from "lodash";
import { Artist, Track } from "../../../interfaces";

/**
 * @param accessToken type string [required]
 * @returns A string of array containing genres
 */

export async function getAvailableGenreSeeds(
    accessToken: string
): Promise<string[]> {
    try {
        const url =
            "https://api.spotify.com/v1/recommendations/available-genre-seeds";

        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data.genres;
    } catch (err) {
        console.error("Error fetching genre seeds:", err);
        return [];
    }
}

/**
 * @returns recommendations based on given seeds.
 */

export const fetchRecommendationResults = async () => {
    try {
        const state = store.getState();
        const seeds = state.recommendation.selectedSeeds;
        const accessToken = state.auth.access_token;

        const artists = seeds
            .filter((seed) => !isString(seed) && seed?.type === "artist")
            .map((artist) => (artist as Artist).id);
        const tracks = seeds
            .filter((seed) => !isString(seed) && seed?.type === "track")
            .map((track) => (track as Track).id);
        const genres = seeds
            .filter((seed) => isString(seed))
            .map((genre) => genre! as string);

        const apiUri = "https://api.spotify.com/v1/recommendations";
        const requestUri = `${apiUri}?seed_tracks=${tracks.join(
            ","
        )}&seed_genres=${genres.join(",")}&seed_artists=${artists.join(",")}`;

        const response = await axios.get(requestUri, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const data = response.data;
        return data.tracks;
    } catch (error) {
        console.error("Error fetching recommendation results:", error);
        throw error;
    }
};
