import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectAccessToken = (state: RootState) => state.auth.access_token;
const selectFoundArtists = (state: RootState) =>
    state.recommendation.foundArtists;
const selectAvailableGenreSeeds = (state: RootState) =>
    state.recommendation.availableGenreSeeds;
const selectActiveSeedSlot = (state: RootState) =>
    state.recommendation.activeSeedSlot;
const selectSelectedSeeds = (state: RootState) =>
    state.recommendation.selectedSeeds;

// Combined selector using createSelector
export const selectRecommendationState = createSelector(
    [
        selectAccessToken,
        selectFoundArtists,
        selectAvailableGenreSeeds,
        selectActiveSeedSlot,
        selectSelectedSeeds,
    ],
    (
        access_token,
        foundArtists,
        availableGenreSeeds,
        activeSeedSlot,
        selectedSeeds
    ) => ({
        access_token,
        foundArtists,
        availableGenreSeeds,
        activeSeedSlot,
        selectedSeeds,
    })
);
