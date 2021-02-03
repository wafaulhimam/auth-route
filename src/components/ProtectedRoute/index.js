import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLogin, ...rest }) => {
// const ProtectedRoute = ({ component: Component, pathProtect, childrenProtect }) => {
    console.log('isLogin Protect =>', isLogin);
    return (
        <>
            <Route
                {...rest}
                // path={pathProtect}
                // children={childrenProtect}
                render={routeProps => {
                    if(isLogin) {
                        return <Component {...routeProps} />
                    } else {
                        return <Redirect to='/' />
                    }
                }}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(ProtectedRoute);