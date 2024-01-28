import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import classes from "../common/FormsControls/FormsContols.module.css";
import React from "react";

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
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
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default LoginReduxForm;
