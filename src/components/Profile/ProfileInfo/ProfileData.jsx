import classes from "./ProfileInfo.module.css";
import Contacts from "./Contacts";
import React from "react";

const ProfileData = (props) => {

    const setEditModeTrue = () => {
        props.setEditMode(true)
    }

    return (
        <div>
            {props.isOwner && <button onClick={setEditModeTrue}>Edit</button>}
            <div>
                <b>Full name: </b> {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b> {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My skills: </b> {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me: </b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b> {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={classes.contacts}>
                    <Contacts contactTitle={key} contactValue={props.profile.contacts[key]}/>
                </div>
            })}
            </div>
        </div>
    )
}

export default ProfileData;

