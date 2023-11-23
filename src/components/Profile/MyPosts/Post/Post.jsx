import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <img
                    src="https://png.pngtree.com/png-vector/20230318/ourlarge/pngtree-smiling-eye-emoticons-vector-png-image_6654625.png"/>
                {props.message}
            </div>
            <div>
                <span>like </span> {props.likes}
            </div>
        </div>
    );
}

export default Post;