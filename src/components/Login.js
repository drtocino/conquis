import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {

    const REACT_GOOGLE_AUTH = "965906568095-71mcrc2ge14hk8pp7ln65v4n5kb7cpdf.apps.googleusercontent.com";
    return (
    <div>
        Login
        <GoogleLogin clientId={REACT_GOOGLE_AUTH} buttonText="Ingresa con Google" onSuccess={console.log("Exito")} onFailure={console.log("Error")} cookiePolicy={"single_host_origin"} />
    </div>
    )
}

export default Login;