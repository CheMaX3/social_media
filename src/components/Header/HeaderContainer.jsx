import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Header from "./Header";
import {setUserAuthData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    this.props.setUserAuthData(response.data.data);
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps,{setUserAuthData})(HeaderContainer);