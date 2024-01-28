import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatarStub from "../../../assets/images/avatar.png";
import ProfileData from "./ProfileData";
import React, {useState} from "react";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    debugger;
    if (!props.profile) {
        return <Preloader/>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );

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
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                {editMode
                    ? <ProfileDataReduxForm initialValues={props.profile}
                                            onSubmit={onSubmit}
                                            profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} setEditMode={setEditMode}/>}
            </div>
        </div>
    );
}

export default ProfileInfo;