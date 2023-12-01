const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.tempMessage,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                tempMessage: ""
            }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                tempMessage: action.textMessage
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageActionCreator = (textMessage) => ({type: UPDATE_MESSAGE, textMessage: textMessage});

export default dialogsReducer;