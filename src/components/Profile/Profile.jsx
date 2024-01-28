import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         isOwner={props.isOwner}
                         saveProfile={props.saveProfile}
                         savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;