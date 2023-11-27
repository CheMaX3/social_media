import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    const posts = props.posts.map(post => (<Post message={post.message}
                                                 likesCount={post.likesCount}/>));

    let newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
        newPostElement.current.value = "";
    }

    const changePostText = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
        newPostElement.current.value = props.tempPostText;
    }

    return (
        <div className={classes.myPosts}>
            <h2>My posts</h2>
            <div className={classes.addPostBlock}>
                <textarea ref={newPostElement}
                          onChange={changePostText}></textarea>
            </div>
            <div className={classes.postManagment}>
                <button onClick={addPost}>
                    Create post
                </button>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;