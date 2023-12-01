import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {name: "Sergei", id: 1},
                {name: "Denis", id: 2},
                {name: "Yurii", id: 3}
            ],
            messages: [
                {message: "Hi", id: 1},
                {message: "How are you?", id: 2},
                {message: "Let's go?", id: 3}
            ],
            tempMessage: ""
        },
        profilePage: {
            posts: [
                {message: "Some message", id: 1, likesCount: 22},
                {message: "Second post", id: 2, likesCount: 2},
                {message: "What about Dogs?", id: 3, likesCount: 20},
                {message: "Do you like Dogs?", id: 4, likesCount: 34}
            ],
            tempPostText: ""
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;