import {rerenderTree} from "../render"

let state = {
    dialogsPage: {
        dialogs: [
            { name: "Sergei", id: 1 },
            { name: "Denis", id: 2 },
            { name: "Yurii", id: 3 }
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
            { message: "Some message", id: 1, likesCount: 22 },
            { message: "Second post", id: 2, likesCount: 2 },
            { message: "What about Dogs?", id: 3, likesCount: 20 },
            { message: "Do you like Dogs?", id: 4, likesCount: 34 }
        ],
        tempPostText: ""
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.tempPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
    state.profilePage.tempPostText = "";
    rerenderTree(state);
}

export let updatePost = (text) => {
    state.profilePage.tempPostText = text;
    rerenderTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.messages.tempMessage,
    };

    state.dialogsPage.messages.push(newMessage);
    rerenderTree(state);
}

export let updateMessage = (text) => {
    state.dialogsPage.dialogs.tempMessage = text;
    rerenderTree(state);
}

export default state;