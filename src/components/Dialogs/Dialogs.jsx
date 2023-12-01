import React from "react";
import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogs = props.dialogs.map(dialog => (<Dialog name={dialog.name}
                                                         id={dialog.id}
                                                         key={dialog.id}/>));
    const messages = props.messages.map(message => (<Message message={message.message}
                                                             key={message.id}/>));

    const sendMessage = () => {
        props.sendMessage();
    };

    const updateMessage = (event) => {
        let textMessage = event.target.value;
        props.updateMessage(textMessage);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
            <div>
                <textarea onChange={updateMessage}
                          value={props.tempMessage}/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;