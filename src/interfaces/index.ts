import { WritableDraft } from "immer";
export interface IContextType {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SpotifyApiResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}

interface ExternalUrls {
    spotify: string;
}

interface Followers {
    href: string;
    total: number;
}

interface Image {
    url: string;
    height: number;
    width: number;
}

export interface Artist {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

interface AlbumArtist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface Restrictions {
    reason: string;
}

export interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: Restrictions;
    type: string;
    uri: string;
    artists: AlbumArtist[];
}

interface ExternalIds {
    isrc: string;
    ean: string;
    upc: string;
}

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: Record<string, never>; // Assuming an empty object for linked_from
    restrictions: Restrictions;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}

export interface Page<T> {
    href: string;
    items: Array<T>;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface RecommendationState {
    availableGenreSeeds: string[] | null;
    foundArtists: Artist[] | null;
    foundTracks: Track[] | null;
    selectedSeeds: Array<
        string | WritableDraft<Artist> | WritableDraft<Track> | null
    >;
    activeSeedSlot: number | null;
    recommendationResults: Track[] | null;
}
