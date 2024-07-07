import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecommendationState, Track } from "../../interfaces";
import {
    setSearchItemsPayloadTypes,
    SetSeedPayloadTypes,
} from "../../interfaces/payloadTypes";

const initialState: RecommendationState = {
    availableGenreSeeds: null,
    foundArtists: null,
    foundTracks: null,
    selectedSeeds: [],
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
            if (state.selectedSeeds.length < 5) {
                seeds.push(action.payload);
                state.selectedSeeds = seeds;
            }
        },
        removeSeedFromSeeds: (state, action: PayloadAction<number>) => {
            state.selectedSeeds = state.selectedSeeds.filter(
                (_, index) => index !== action.payload
            );
        },
        setRecommendationResults: (state, action: PayloadAction<Track[]>) => {
            state.recommendationResults = action.payload;
        },
        setReset: (state) => {
            state.foundArtists = null;
            state.foundTracks = null;
            state.selectedSeeds = [];
            state.recommendationResults = null;
        },
    },
});

export const {
    populateGenreSeeds,
    setSearchItems,
    setSeed,
    removeSeedFromSeeds,
    setRecommendationResults,
    setReset,
} = recommendationSlice.actions;

export default recommendationSlice.reducer;
