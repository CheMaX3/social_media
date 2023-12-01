import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const posts = props.posts.map(post => (<Post message={post.message}
                                                 likesCount={post.likesCount}
                                                 key={post.id}/>));

    const addPost = () => {
        props.addPost();
    };

    const updatePost = (event) => {
        let textPost = event.target.value;
        props.updatePost(textPost);
    };

    return (
        <div className={classes.myPosts}>
            <h2>My posts</h2>
            <div className={classes.addPostBlock}>
                <textarea onChange={updatePost}
                          value={props.tempPostText}/>
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