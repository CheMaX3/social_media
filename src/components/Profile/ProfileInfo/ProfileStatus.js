import React from "react";

class ProfileStatus extends React.Component {

    state = {
        isEditMode: false,
        status: this.props.status
    }

    setEditModeTrue = () => {
        this.setState({
            isEditMode: true
        })
    }

    setEditModeFalse = () => {
        this.setState({
            isEditMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.isEditMode &&
                    <span onDoubleClick={this.setEditModeTrue}>{this.props.status || "-----"}</span>
                }
                {this.state.isEditMode &&
                    <input autoFocus={true} onBlur={this.setEditModeFalse}
                           onChange={this.onStatusChange} value={this.state.status}></input>
                }
            </div>
        )
    }
}

export default ProfileStatus;