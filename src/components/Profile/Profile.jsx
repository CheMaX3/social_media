import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;