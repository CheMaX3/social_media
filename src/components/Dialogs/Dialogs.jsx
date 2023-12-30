import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {FormControl} from "../common/FormsControls/FormsControls";
import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogs = props.dialogs.map(dialog => (<Dialog name={dialog.name}
                                                         id={dialog.id}
                                                         key={dialog.id}/>));
    const messages = props.messages.map(message => (<Message message={message.message}
                                                             key={message.id}/>));

    const maxLength20 = maxLengthCreator(20);

    const sendMessage = (values) => {
        props.sendMessage(values.textMessage);
    };

    const DialogsMessageForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <Field component={FormControl}
                   child={"textarea"}
                   name={"textMessage"}
                   placeholder={"Type message here"}
                   validate={[requiredField, maxLength20]}/>
            <button>Send message</button>
        </form>
    }

    const DialogsMessageReduxForm = reduxForm({form: "addNewMessage"})(DialogsMessageForm)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
            <DialogsMessageReduxForm onSubmit={sendMessage}/>
        </div>
    );
}

export default Dialogs;