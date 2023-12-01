import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer.js";
import profileReducer from "./profileReducer.js";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;