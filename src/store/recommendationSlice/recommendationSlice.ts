import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecommendationState } from "../../interfaces";
import {
    setSearchItemsPayloadTypes,
    SetSeedPayloadTypes,
} from "../../interfaces/payloadTypes";

const initialState: RecommendationState = {
    availableGenreSeeds: null,
    foundArtists: null,
    foundTracks: null,
    selectedSeeds: [],
    activeSeedSlot: null,
    recommendationResults: null,
};

const recommendationSlice = createSlice({
    name: "recommendation",
    initialState,
    reducers: {
        populateGenreSeeds: (state, action: PayloadAction<string[]>) => {
            state.availableGenreSeeds = action.payload;
        },
        setSearchItems: (
            state,
            action: PayloadAction<setSearchItemsPayloadTypes>
        ) => {
            state.foundArtists = action.payload.artists;
            state.foundTracks = action.payload.tracks;
        },
        setSeed: (state, action: PayloadAction<SetSeedPayloadTypes>) => {
            const seeds = [...state.selectedSeeds];
            seeds[action.payload.index] = action.payload.seed;

            state.selectedSeeds = seeds;
            state.activeSeedSlot = null;
        },
        setActiveSeedSlot: (state, action: PayloadAction<number>) => {
            state.activeSeedSlot = action.payload;
        },
    },
});

export const {
    populateGenreSeeds,
    setSearchItems,
    setSeed,
    setActiveSeedSlot,
} = recommendationSlice.actions;

export default recommendationSlice.reducer;
