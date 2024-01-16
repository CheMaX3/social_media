import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";

const SET_USER_AUTH_DATA = "auth/SET_USER_AUTH_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setUserAuthData = (userId, email, login, isAuthorized) => ({
    type: SET_USER_AUTH_DATA, payload: {
        userId, email, login, isAuthorized
    }
});

export const getUserAuthData = () => async (dispatch) => {
    let response = await authAPI.getAuthData();
    if (response.resultCode === 0) {
        dispatch(setUserAuthData(response.data.id, response.data.email, response.data.login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getUserAuthData());
    } else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Something went wrong";
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false));
    }
}

export default authReducer;