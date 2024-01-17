import {profileAPI} from "../api/api";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status: status});

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos: photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (photos) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photos);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;