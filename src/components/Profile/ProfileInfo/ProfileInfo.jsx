import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatarStub from "../../../assets/images/avatar.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            const avatar = e.target.files[0];
            props.savePhoto(avatar);
        }
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img className={classes.avatar} src={props.profile.photos.large || avatarStub}/>
                </div>
                <div>
                    {props.isOwner && <input type={"file"} onChange={onAvatarSelected}/>}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;