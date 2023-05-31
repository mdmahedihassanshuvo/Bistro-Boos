import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginWithSocial = () => {

    const { loginWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)
    const navigate = useNavigate()
    const from = location?.state?.from || '/'

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                    })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={handleLoginWithGoogle} className="btn btn-block"><FaGoogle className='mr-2 text-blue-600 text-xl' /> Login With Google</button>
        </div>
    );
};

export default LoginWithSocial;