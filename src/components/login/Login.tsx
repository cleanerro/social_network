import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {LoginDataType} from "../../api/api";
import {Redirect} from "react-router";
import s from "../common/FormsControls/FormsControls.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const maxLength = maxLengthCreator(30);
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field component={Input}
                       type={"checkbox"}
                       name={'rememberMe'}
                /> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                { props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData)
        console.log(formData)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1> Login </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
let mapStateToProps = (state: StateType): MapStateToPropsType => (
    {
        isAuth: state.auth.isAuth
    }
)
export default connect(mapStateToProps, {loginTC})(Login)

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    loginTC: (data: LoginDataType) => void
}