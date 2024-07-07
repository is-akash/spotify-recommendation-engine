import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

// AUTH SLICE
const selectAccessToken = (state: RootState) => state.auth.access_token;

// RECOMMENDATION SLICE
const selectAvailableGenreSeeds = (state: RootState) =>
    state.recommendation.availableGenreSeeds;
const selectFoundArtists = (state: RootState) =>
    state.recommendation.foundArtists;
const selectFoundTracks = (state: RootState) =>
    state.recommendation.foundTracks;
const selectSelectedSeeds = (state: RootState) =>
    state.recommendation.selectedSeeds;
const selectRecommendationResults = (state: RootState) =>
    state.recommendation.recommendationResults;

// Combined selector using createSelector
export const selectReduxState = createSelector(
    [
        selectAccessToken,
        selectAvailableGenreSeeds,
        selectFoundArtists,
        selectFoundTracks,
        selectSelectedSeeds,
        selectRecommendationResults,
    ],
    (
        access_token,
        availableGenreSeeds,
        foundArtists,
        foundTracks,
        selectedSeeds,
        recommendationResults
    ) => ({
        access_token,
        availableGenreSeeds,
        foundArtists,
        foundTracks,
        selectedSeeds,
        recommendationResults,
    })
);
