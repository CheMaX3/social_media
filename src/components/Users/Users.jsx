const Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevP0BAZ8B9buMaaQaMKSn0w5u0Y0EV1d4yg&usqp=CAU",
                    followed: true,
                    fullName: "Sergei",
                    status: "Looking for something",
                    location: {
                        country: "Russia",
                        city: "Nizhni Novgorod"
                    }
                },
                {
                    id: 2,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDATwYwwNGQUhEBH7V8QlkfxJbSVkOjx_Jtg&usqp=CAU",
                    followed: false,
                    fullName: "Denis",
                    status: "Looking for himself",
                    location: {
                        country: "Russia",
                        city: "Ankudinovka"
                    }
                },
                {
                    id: 3,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYlpTOofYSQ99ji811HRGBV6tvbzd_ZWBklw&usqp=CAU",
                    followed: true,
                    fullName: "Yurii",
                    status: "Ten'",
                    location: {
                        country: "Russia",
                        city: "Nizhni Novgorod"
                    }
                }])
    }

    return (
        <div> {
            props.users.map(user => <div key={user.id}>
                    <div>
                        {<img src={user.photoUrl}/>}
                    </div>
                    <div> {
                        user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>UNFOLLOW</button>
                            : <button onClick={() => props.follow(user.id)}>FOLLOW</button>
                    }
                    </div>
                    <div>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default Users;