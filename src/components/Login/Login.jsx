import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/authReducer";
import {requiredField} from "../../utils/validators/validators";
import classes from "../common/FormsControls/FormsContols.module.css";
import {FormControl} from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"}
                       component={FormControl}
                       child={"input"}
                       name={"email"}
                       placeholder={"Email"}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"password"}
                       component={FormControl}
                       child={"input"}
                       name={"password"}
                       placeholder={"Password"}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuthorized) {
        return <Navigate to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({isAuthorized: state.auth.isAuthorized})

export default connect(mapStateToProps, {login})(Login);