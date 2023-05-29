import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../../Hooks/UseCart';

const FoodCard = ({ item }) => {

    const { name, price, recipe, image, _id } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = UseCart()


    const handleAddToCart = (item) => {
        console.log(item)
        const cartItem = { foodOrderId: _id, name, image, price, email: user?.email }
        if (user && user.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Order added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: "You aren't able to order this item",
                text: "Please Login to order",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state: {from: location}})
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-800 text-white absolute right-0 mr-5 mt-4 p-2 rounded'>${price}</p>
            <div className="card-body ">
                <h2 className="card-title justify-center">{name}</h2>
                <p className='justify-center'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn bg-[#E8E8E8] border-0 border-b-4 mt-2 border-[#BB8506] text-[#BB8506] btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;