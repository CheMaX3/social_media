import axios from "axios";
import React from "react";
import avatarStub from "./../../assets/images/avatar.png";
import classes from "./Users.module.css";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    setCurrentPage(page) {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

        return <div>
            <div> { pages.map(page => {
                return <span className={this.props.currentPage === page && classes.selectedPage}
                             onClick={() => {this.setCurrentPage(page)}}>{page}</span>})
            }
            </div>

            {
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
    }
}

export default Users;