import {Field, reduxForm} from "redux-form";
import React from "react";
import {FormControl} from "../../common/FormsControls/FormsControls";
import classes from "./ProfileInfo.module.css";
import styles from "../../common/FormsControls/FormsContols.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <b>Full name: </b>
                    <Field type={"text"}
                           component={FormControl}
                           child={"input"}
                           name={"fullName"}
                           placeholder={"Full Name"}/>
                </div>
                <div>
                    <b>Looking for a job: </b>
                    <Field type={"checkbox"} name={"lookingForAJob"} component={"input"}/>
                </div>
                <div>
                    <b>My skills: </b>
                    <Field type={"text"}
                           component={FormControl}
                           child={"textarea"}
                           name={"lookingForAJobDescription"}
                           placeholder={"My professional skills"}/>
                </div>
                <div>
                    <b>About me: </b>
                    <Field type={"text"}
                           component={FormControl}
                           child={"textarea"}
                           name={"aboutMe"}
                           placeholder={"About me"}/>
                </div>
                <div>
                    <b>Contacts</b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={classes.contacts}>
                        <b>{key}:
                            <Field type={"text"}
                                   component={FormControl}
                                   child={"input"}
                                   name={"contacts." + key}
                                   placeholder={key}/>
                        </b>
                    </div>
                })}
                </div>
                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>}
                <button>Save</button>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: "profileData", enableReinitialize: true, destroyOnUnmount: false
})(ProfileDataForm);

export default ProfileDataReduxForm;