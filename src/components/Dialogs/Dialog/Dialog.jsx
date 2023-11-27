import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {

    let path = "/dialogs/" + props.id;
    let name = props.name;

    return (
        <div className={classes.dialog}>
            <div className={classes.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHAKWHhA6UuX-UPdizhi5K4IsByBpEJMX8Q&usqp=CAU" />
            </div>
                <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

export default Dialog;