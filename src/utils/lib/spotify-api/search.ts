import axios from "axios";

export enum SearchTypes {
    Artist = "artist",
    Track = "track",
    Album = "album",
    Playlist = "playlist",
    Show = "show",
    Episode = "episode",
}

/**
 * @requires accessToken type string [required]
 * @requires query type string [required]
 * @returns Search the Spotify API for albums, artists, playlists, tracks, shows or episodes and returns.
 * https://developer.spotify.com/documentation/web-api/reference-beta/#category-search
 */

export async function getSearchItems(
    accessToken: string,
    query: string,
    types: Array<SearchTypes>
): Promise<any> {
    if (!query) {
        return Promise.reject("No search query");
    }

    if (!types || types.length === 0) {
        return Promise.reject("No types");
    }

    const apiUri = "https://api.spotify.com/v1/search";
    const url = `${apiUri}?q=${encodeURIComponent(query)}&type=${types.join(
        ","
    )}`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching search items:", error);
        return Promise.reject(error);
    }
}
