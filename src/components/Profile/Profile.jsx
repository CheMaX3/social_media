import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.header_image}>
                <img className={classes.logo}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKIS4-riJ4ZgDKMK0Oh2qapWQJ2rwDfKEtA&usqp=CAU"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;