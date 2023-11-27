import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.header_image}>
                <img className={classes.logo}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKIS4-riJ4ZgDKMK0Oh2qapWQJ2rwDfKEtA&usqp=CAU"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;