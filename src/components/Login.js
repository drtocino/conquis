import React from 'react';
// import GoogleLogin from 'react-google-login';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {

    // const REACT_GOOGLE_AUTH = "965906568095-71mcrc2ge14hk8pp7ln65v4n5kb7cpdf.apps.googleusercontent.com";
    return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
    )
}

export default Login;