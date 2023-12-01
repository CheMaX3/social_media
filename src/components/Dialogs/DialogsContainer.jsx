import React from "react";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs.jsx";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        tempMessage: state.dialogsPage.tempMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateMessage: (textMessage) => {
            dispatch(updateMessageActionCreator(textMessage));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;