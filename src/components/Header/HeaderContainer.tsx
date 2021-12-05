import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthType, setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {authApi} from "../../api/api";


type MapDispatchToPropsType = {
    setUserData: (userId: number, email: string, login: string) => void

}
export type HeaderContainerPagePropsType = AuthType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerPagePropsType> {
   componentDidMount()  {
       authApi.getAuth()
       .then(data => {
          if(data.resultCode === 0){
              let {id, login, email} = data.data
              this.props.setUserData( id, email, login)
          }
       })
   }

    render() {
        return <Header {...this.props} />

    }
}

let mapStateToProps = (state: StateType):AuthType   => {
return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.userId
}

}

export default connect(mapStateToProps, {setUserData} ) (HeaderContainer)