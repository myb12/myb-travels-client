import React from 'react';
import { Container } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'

const Login = () => {
    return (

        <Container>
            <div className="row justify-content-center px-2 mt-5">
                <div className="col-md-6 login-container d-flex justify-content-center">
                    <button className="btn btn-regular ms-3  d-flex align-items-center"> <FcGoogle className="google-icon" /> Sign in with Google</button>
                </div>
            </div>
        </Container>
    );
};

export default Login;