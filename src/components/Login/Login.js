import React from 'react';
import { Container } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle, setIsLoading,  error, setError } = useAuth();
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

        <Container style={{marginTop:100}}>
            <div className="row justify-content-center px-2 mt-5">
                <h3 className="text-center mb-3">Login to your account</h3>
                <div className="col-md-6 login-container d-flex justify-content-center">
                    <button onClick={handleGoogleSignIn} className="btn btn-regular ms-3  d-flex align-items-center"> <FcGoogle className="google-icon" /> Sign in with Google</button>
                </div>
            </div>
        </Container>
    );
};

export default Login;