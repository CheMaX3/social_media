import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    posts: [
        {message: "Some message", id: 1, likesCount: 22},
        {message: "Second post", id: 2, likesCount: 2},
        {message: "What about Dogs?", id: 3, likesCount: 20},
        {message: "Do you like Dogs?", id: 4, likesCount: 34}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status: status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(data => {
        dispatch(setUserStatus(data))
    });
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
        debugger;
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}

export default profileReducer;