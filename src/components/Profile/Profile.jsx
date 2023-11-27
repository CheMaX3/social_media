import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     updatePost={props.updatePost}
                     tempTextPost={props.tempTextPost} />
        </div>
    );
}

export default Profile;