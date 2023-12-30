import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

export const withAuthRedirect = (Component) => {

    class ComponentWithRedirect extends React.Component {

        render() {
            if (!this.props.isAuthorized) {
                return <Navigate to={"/login"}/>
            }
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(ComponentWithRedirect);
}