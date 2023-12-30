import {getUserAuthData} from "./authReducer";

const INITIALIZED_SUCCESSFUL = "INITIALIZED_SUCCESSFUL";

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccessful = () => ({type: INITIALIZED_SUCCESSFUL});

export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(getUserAuthData());
        promise.then(() => {
            dispatch(initializedSuccessful());
        })
    }
}

export default appReducer;