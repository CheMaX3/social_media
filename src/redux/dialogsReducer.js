const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    dialogs: [
        {name: "Sergei", id: 1},
        {name: "Denis", id: 2},
        {name: "Yurii", id: 3}
    ],
    messages: [
        {message: "Hi", id: 1},
        {message: "How are you?", id: 2},
        {message: "Пошли копать траншеи с Крайновым?", id: 3}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.textMessage,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (textMessage) => ({type: ADD_MESSAGE, textMessage});

export default dialogsReducer;