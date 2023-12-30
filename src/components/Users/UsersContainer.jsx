import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {follow, getUsersFromRequest, setCurrentPage, setFollowToggleProgress, unfollow} from "../../redux/usersReducer";
import {
    getCurrentPage,
    getFollowToggleInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelector";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersFromRequest(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage(page) {
        this.props.getUsersFromRequest(page, this.props.pageSize);
    }

    render() {
        return (
            <> {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       setFollowToggleProgress={this.props.setFollowToggleProgress}
                       followToggleInProgress={this.props.followToggleInProgress}
                       setCurrentPage={this.setCurrentPage.bind(this)}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followToggleInProgress: getFollowToggleInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setFollowToggleProgress, getUsersFromRequest, setCurrentPage}),
    withAuthRedirect
)(UsersContainer)