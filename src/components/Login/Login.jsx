import React from "react";
import {Navigate} from "react-router-dom";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";


const Login = ({login, isAuthorized}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuthorized) {
        return <Navigate to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({isAuthorized: state.auth.isAuthorized})

export default connect(mapStateToProps, {login})(Login);