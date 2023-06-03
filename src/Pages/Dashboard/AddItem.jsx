import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../Shared/components/SectionTitle';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const image_hoisting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddItem = () => {

    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure()
    const image_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(image_hoisting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                console.log(imageRes)
                if (imageRes.success) {
                    const imageUrl = imageRes.data.display_url;
                    const { name, price, recipe, category } = data;
                    const newItem = { name, price: parseFloat(price), recipe, category, image: imageUrl };
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log(data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Food Item has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }
                        })
                }
            })
    };


    return (
        <div className='w-full'>
            <Helmet>
                <title>
                    Bistro Boss | Add Item
                </title>
            </Helmet>
            <SectionTitle subHeading="What's new?" heading="ADD AN ITEM" />
            <form className='mx-20' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input type="text" name='name' placeholder="Recipe name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>
                <div className='flex gap-3 lg:gap-5 my-5'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue='Pick One' {...register("category", { required: true })} className="select select-bordered">
                            <option disabled selected>Pick One</option>
                            <option>dessert</option>
                            <option>pizza</option>
                            <option>salad</option>
                            <option>soup</option>
                            <option>drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" name='price' placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea type='text' className="textarea textarea-bordered h-24" {...register("details", { required: true })} placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full my-5 max-w-xs">
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className='btn bg-gradient-to-r from-[#835D23] to-[#B58130]' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;