import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatarStub from "../../../assets/images/avatar.png";
import Contacts from "./Contacts";

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
                <button>Send</button>
                <div>
                    <b>Looking for a job: </b> {props.profile.lookingForAJob ? "yes" : "no"}
                </div>
                {props.profile.lookingForAJob &&
                    <div>
                        <b>My skills: </b> {props.profile.lookingForAJobDescription}
                    </div>}
                <div>
                    <b>Full name: </b> {props.profile.fullName}
                </div>
                <div>
                    <b>Contacts</b> {Object.keys(props.profile.contacts).map(key => {
                    return <div className={classes.contacts}>
                        <Contacts contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    </div>
                })}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;