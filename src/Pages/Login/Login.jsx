import React, { useContext, useEffect, useRef, useState } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/login.json";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const { loginUser, user, loginWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                const user = result.user;
                const loggedUser = {
                    email: user.email
                }
                // console.log(loggedUser)
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        localStorage.setItem('accessToken', data.token);
                        navigate(from, { replace: true })
                        form.reset();
                    })
            })
            .catch(error => console.log(error))
    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:w-4/12 lg:text-left">
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the captcha" className="input input-bordered" />
                            </div>
                            {/* ToDo : make button disable for captcha--------------- */}
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className='mt-2 text-center'>Don't have any account please, <Link to='/register' state={{ from: from }} className='text-blue-600 underline'>Sign Up</Link></p>
                            <button onClick={handleLoginWithGoogle} className="btn btn-block"><FaGoogle className='mr-2 text-blue-600 text-xl' /> Login With Google</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;