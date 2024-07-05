/**
 * @param accessToken [required]
 * @returns A string of array containing genres
 */

export function getAvailableGenreSeeds(accessToken: string): Promise<Response> {
    const request = new Request(
        "https://api.spotify.com/v1/recommendations/available-genre-seeds"
    );
    request.headers.set("Authorization", "Bearer " + accessToken);

    return fetch(request);
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
