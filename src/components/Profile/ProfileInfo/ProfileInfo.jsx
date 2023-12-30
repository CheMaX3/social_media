import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={classes.header_image}>*/}
            {/*    <img className={classes.logo}*/}
            {/*         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKIS4-riJ4ZgDKMK0Oh2qapWQJ2rwDfKEtA&usqp=CAU"/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
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