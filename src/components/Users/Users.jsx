import axios from "axios";
import React from "react";
import avatarStub from "./../../assets/images/avatar.png";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div> {
                this.props.users.map(user => <div key={user.id}>
                        <div>
                            {<img src={user.photos.small != null ? user.photos.small : avatarStub}/>}
                        </div>
                        <div> {
                            user.followed
                                ? <button onClick={() => this.props.unfollow(user.id)}>UNFOLLOW</button>
                                : <button onClick={() => this.props.follow(user.id)}>FOLLOW</button>
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
        )
    }
}

export default Users;