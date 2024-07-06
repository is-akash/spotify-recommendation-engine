import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpotifyApiResponse } from "../../interfaces";
import { AuthenticationState } from "./types";

const initialState: AuthenticationState = {
    access_token: null,
    valid_until: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<SpotifyApiResponse>) => {
            state.access_token = action.payload.access_token;
            state.valid_until = action.payload.expires_in;
        },
        clearAccessToken: (state) => {
            localStorage.removeItem("spotify_auth");
            state = initialState;
        },
    },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
