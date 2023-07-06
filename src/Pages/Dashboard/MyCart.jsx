import React from 'react';
import UseCart from '../../Hooks/UseCart';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../Shared/components/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {

    const [cart, refetch] = UseCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-jade.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div>
                <SectionTitle
                    subHeading={'My Cart'}
                    heading={"WANNA ADD MORE?"}
                ></SectionTitle>
            </div>
            <div className='flex justify-evenly lg:mb-3 gap-5 items-center'>
                <h2 className='text-2xl uppercase'>Total orders: {cart.length}</h2>
                <h2 className='text-2xl uppercase'>Total price: ${total}</h2>
                <Link to='/dashboard/payment'><button className="btn btn-sm bg-[#D1A054] border-0">pay</button></Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => {
                                return <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 p-2 btn-sm"><FaTrashAlt /></button>
                                    </th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;