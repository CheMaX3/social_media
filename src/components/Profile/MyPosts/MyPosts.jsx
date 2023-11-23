import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Create post</button>
            </div>
            <Post message={"Some message"} likes={"24"}/>
            <Post message={"Second post"} likes={"25"}/>
            <Post message={"What about Dogs?"} likes={"2"}/>
            <Post message={"Do you like Dogs?"} likes={"155"}/>
        </div>
    );
}

export default MyPosts;