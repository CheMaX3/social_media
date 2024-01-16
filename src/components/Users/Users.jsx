import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, currentPage, pageSize, setCurrentPage, users, ...props}) => {
    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   currentPage={currentPage}
                   pageSize={pageSize}
                   setCurrentPage={setCurrentPage}/>
        {
            users.map(user => <User followToggleInProgress={props.followToggleInProgress}
                                    follow={props.follow} unfollow={props.unfollow}
                                    user={user} />)
        }
    </div>
}

export default Users;