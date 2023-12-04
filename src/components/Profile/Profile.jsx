import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;