import React from 'react';
import { Container } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle, setIsLoading, error, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(({ user }) => {
                history.push(location.state?.from || '/');
                setError('');
                window.scrollTo(0, 0);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    return (

        <Container style={{ marginTop: 100 }}>
            <div className="section-header section-margin-top row">
                <div className="col-lg-4 col-md-3 col-sm-3">
                    <hr className="title-line" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <h2 className="section-title">Please login</h2>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-3">
                    <hr className="title-line" />
                </div>
            </div>
            <div className="row justify-content-center px-2 mt-5">
                <div className="col-md-6 login-container d-flex justify-content-center">
                    <button onClick={handleGoogleSignIn} className="btn btn-regular ms-3  d-flex align-items-center"> <FcGoogle className="google-icon" /> Sign in with Google</button>
                </div>
            </div>
            <div className="row text-danger justify-content-center mt-3 w-100">{error}</div>
        </Container>
    );
};

export default Login;