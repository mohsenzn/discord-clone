import React from 'react';
import { Button } from '@material-ui/core'

const Login = () => {
    return (
        <div className="login">
            
        <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt="" srcset=""/>
        </div>

        <Button onClick>SignIn</Button>

    </div>
    );
};

export default Login;