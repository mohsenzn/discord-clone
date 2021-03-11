import React from 'react';
import { Button } from '@material-ui/core'
import {auth,provider} from '../../firebase'
const Login = () => {
    const singIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            
        <div className="login__logo">
            <img src={process.env.PUBLIC_URL + "/pic/logo.png" } alt="" srcset=""/>
        </div>

        <Button onClick={singIn}>SignIn</Button>

    </div>
    );
};

export default Login;