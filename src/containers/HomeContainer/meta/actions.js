import * as constants from "./constants";


export const getHome = () => ({
    type: constants.GET_HOME,
});

export const getHomeSuccess = payload => ({
    type: constants.GET_HOME_SUCCESS,
    payload,
});

export const getHomeError = payload => ({
    type: constants.GET_HOME_ERROR,
    payload,
});
