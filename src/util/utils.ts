import { isNull } from "lodash";
import store from "../store/store";

export const isAuthenticated = () => {
    const state = store.getState().authentication;

    if (isNull(state.access_token) || isNull(state.valid_until)) {
        return false;
    }

    return state.valid_until > Date.now();
};
