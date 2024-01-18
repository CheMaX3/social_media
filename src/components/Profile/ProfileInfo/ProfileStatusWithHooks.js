import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const setEditModeTrue = () => {
        setEditMode(true)
    }

    const setEditModeFalse = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <span onDoubleClick={setEditModeTrue}><b>Status: </b>{props.status || "-----"}</span>
            }
            {editMode &&
                <input autoFocus={true} onBlur={setEditModeFalse}
                       onChange={onStatusChange} value={status}></input>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;