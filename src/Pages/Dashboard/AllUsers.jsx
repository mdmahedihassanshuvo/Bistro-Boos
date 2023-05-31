import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        },
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.modifiedCount > 0){
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is now Admin`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    const handleDelete = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.deletedCount > 0){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User deleted',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='w-full ml-5'>
            <h2 className='text-3xl font-semibold uppercase mb-5'>Total users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.roll === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-accent p-2 btn-sm"><FaUsers /></button>}</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 p-2 btn-sm"><FaTrashAlt /></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;