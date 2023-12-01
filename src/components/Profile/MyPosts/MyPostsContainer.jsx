import React from "react";
import {connect} from "react-redux";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer.js";
import MyPosts from "./MyPosts.jsx";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        tempPostText: state.profilePage.tempPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePost: (textPost) => {
            dispatch(updatePostActionCreator(textPost));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;