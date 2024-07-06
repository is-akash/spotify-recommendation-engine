import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RecommendationState } from "./types";

const initialState: RecommendationState = {
    availableGenreSeeds: null,
};

const recommendationSlice = createSlice({
    name: "recommendation",
    initialState,
    reducers: {
        populateGenreSeeds: (state, action: PayloadAction<string[]>) => {
            state.availableGenreSeeds = action.payload;
        },
    },
});

export const { populateGenreSeeds } = recommendationSlice.actions;

export default recommendationSlice.reducer;
