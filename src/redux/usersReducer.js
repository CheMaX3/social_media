import {followAPI, usersAPI} from "../api/api";
import {updateObjectsInArray} from "../utils/objectUpdater";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const SET_FOLLOW_TOGGLE_PROGRESS = "users/SET_FOLLOW_TOGGLE_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followToggleInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId,"id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId,"id",{followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_FOLLOW_TOGGLE_PROGRESS:
            return {
                ...state,
                followToggleInProgress: action.isFetching
                    ? [...state.followToggleInProgress, action.userId]
                    : state.followToggleInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const setFollowToggleProgress = (isFetching, userId) => ({
    type: SET_FOLLOW_TOGGLE_PROGRESS,
    isFetching,
    userId
});


export const getUsersFromRequest = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

const followUnfollowFlow = async (userId, dispatch, apiMethod, actionCreator) => {
    dispatch(setFollowToggleProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowToggleProgress(false, userId));
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(userId, dispatch, followAPI.unfollow.bind(followAPI), unfollowSuccess);
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(userId, dispatch, followAPI.follow.bind(followAPI), followSuccess);
}

export default usersReducer;