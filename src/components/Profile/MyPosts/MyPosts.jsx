import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    const posts = props.posts.map(post => (<Post message={post.message}
                                                 likesCount={post.likesCount}
                                                 key={post.id}/>));

    const addPost = (values) => {
        props.addPost(values.newPostText);
    };

    const AddNewPostForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <Field component={FormControl}
                   child={"textarea"}
                   name={"newPostText"}
                   validate={[requiredField, maxLength10]}/>
            <button>Create post</button>
        </form>
    }

    const AddNewPostFormRedux = reduxForm({form: "addNewPostForm"})(AddNewPostForm)

    return (
        <div className={classes.myPosts}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;