import React, { useContext } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/login.json";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, sendVerification } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const from = location?.state?.from || '/'
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                updateUserProfile(data.name, data.photo)
                    .then(() => console.log('profile updated successfully'))
                    .catch(error => console.log(error))
                sendVerification()
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Send Verification code to your account',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        reset()
                    })
                const loggedUser = {
                    email: user.email
                }
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
                    })
            })
            .catch(error => console.log(error));
        // navigate(from, { replace: true })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="Enter name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Please enter your name</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Enter photo url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-600'>Please enter your photo url</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="Enter email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Please enter your email</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 8, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name='password' placeholder="Enter password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Please input password</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">password must be 8 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">password must have one uppercase , one special, one digits, one lowercase character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className='mt-2 text-center'>Already have an account please, <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;