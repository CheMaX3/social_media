import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);