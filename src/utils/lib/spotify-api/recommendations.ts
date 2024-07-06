import axios from "axios";

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
 * Get recommendations based on given seeds.
 */
export function getRecommendations(
    accessToken: string,
    seedArtists: string[] = [],
    seedTracks: string[] = [],
    seedGenres: string[] = []
): Promise<Response> {
    const apiUri = "https://api.spotify.com/v1/recommendations";
    const request = new Request(
        `${apiUri}?seed_tracks=${seedTracks.join(
            ","
        )}&seed_genres=${seedGenres.join(",")}&seed_artists=${seedArtists.join(
            ","
        )}`
    );
    request.headers.set("Authorization", "Bearer " + accessToken);

    return fetch(request);
}
