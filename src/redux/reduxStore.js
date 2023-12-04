import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer.js";
import profileReducer from "./profileReducer.js";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;