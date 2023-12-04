const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";

let initialState = {
    data: null,
    isAuthorized: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                data: action.data,
                isAuthorized: true
            }
        default:
            return state;
    }
}

export const setUserAuthData = (data) => ({type: SET_USER_AUTH_DATA, data});

export default authReducer;