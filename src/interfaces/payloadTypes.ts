import { WritableDraft } from "immer";
import { Artist, Track } from "./index";
export interface setAccessTokenPayloadType {
    access_token: string;
    expires_in: number;
    token_type: string;
}

export interface setSearchItemsPayloadTypes {
    artists: Artist[];
    tracks: Track[];
}

export interface SetSeedPayloadTypes {
    index: number;
    seed: string | WritableDraft<Artist> | WritableDraft<Track> | null;
}
