import classes from "./Message.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {

    let message = props.message;

    return (
        <div className={classes.message}>
            {message}
        </div>
    );
}

export default Message;