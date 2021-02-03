import React from 'react';
import { connect } from 'react-redux';
import { LogIn, LogOut } from '../../redux/authentication/actions';

const LoginButton = ({ isLogin, loginAction, logoutAction }) => {
    const handleClick =() => {
        // console.log('Klik Button');
        if (isLogin) {
            logoutAction();
            console.log('Logout');
        } else {
            loginAction();
            console.log('Login');
        }
    }

    console.log('isLogin =>', isLogin);

    return (
        <button onClick={handleClick}>{isLogin ? "Logout" : "Login"}</button>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: () => dispatch(LogIn),
        logoutAction: () => dispatch(LogOut)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);