import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    const dialogsArray = props.dialogs.map( dialog => (<Dialog name={dialog.name} id={dialog.id} />) );
    const messages = props.messages.map(message => (<Message message={message.message} />));

    let newMessageElement = React.createRef();

    const sendMessage = () => {
        props.addMessage();
        newMessageElement.current.value = "";
    }

    const updateMessage = () => {
        let textMessage = newMessageElement.current.value;
        props.updateMessage(textMessage);
        newMessageElement.current.value = props.state.tempMessage;
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsArray }
            </div>
            <div className={classes.messages}>
                {messages}
                <div>
                    <textarea ref={newMessageElement}
                              onChange={updateMessage} ></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;