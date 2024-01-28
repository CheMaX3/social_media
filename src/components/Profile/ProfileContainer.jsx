import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRouter";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
                     status={this.props.status}
                     isOwner={!this.props.router.params.userId}
            />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)