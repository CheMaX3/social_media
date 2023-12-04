import React from "react";
import avatarStub from "../../assets/images/avatar.png";
import classes from "./Users.module.css";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div> {pages.map(page => {
            return <span className={props.currentPage === page && classes.selectedPage}
                         onClick={() => {
                             props.onPageChanged(page)
                         }}>{page}</span>
        })
        }
        </div>

        {
            props.users.map(user => <div key={user.id}>
                    <div>
                        {<img src={user.photos.small != null ? user.photos.small : avatarStub}/>}
                    </div>
                    <div> {
                        user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>UNFOLLOW</button>
                            : <button onClick={() => props.follow(user.id)}>FOLLOW</button>
                    }
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;