import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthenticationState } from "./types";
import { setAccessTokenPayloadType } from "../../interfaces/payloadTypes";

const initialState: AuthenticationState = {
    access_token: null,
    valid_until: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (
            state,
            action: PayloadAction<setAccessTokenPayloadType>
        ) => {
            const validUntil = Date.now() + action.payload.expires_in * 1000;
            state.access_token = action.payload.access_token;
            state.valid_until = validUntil;
        },
        clearAccessToken: (state) => {
            state.access_token = null;
            state.valid_until = null;
        },
    },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
