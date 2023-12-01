const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

let initialState = {
    posts: [
        {message: "Some message", id: 1, likesCount: 22},
        {message: "Second post", id: 2, likesCount: 2},
        {message: "What about Dogs?", id: 3, likesCount: 20},
        {message: "Do you like Dogs?", id: 4, likesCount: 34}
    ],
    tempPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.tempPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                tempPostText: ""
            }
        case UPDATE_POST:
            return {
                ...state,
                tempPostText: action.textPost
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostActionCreator = (textPost) => ({type: UPDATE_POST, textPost: textPost});

export default profileReducer;