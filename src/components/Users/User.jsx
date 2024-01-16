import React from "react";
import {NavLink} from "react-router-dom";
import avatarStub from "./../../assets/images/avatar.png";

let User = ({followToggleInProgress, unfollow, follow, user}) => {
    return <div key={user.id}>
                    <div>
                        <NavLink to={"../profile/" + user.id}>
                            {<img src={user.photos.small != null ? user.photos.small : avatarStub}/>}
                        </NavLink>
                    </div>
                    <div> {
                        user.followed
                            ? <button disabled={followToggleInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }}>UNFOLLOW</button>
                            : <button disabled={followToggleInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }}>FOLLOW</button>
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
}

export default User;