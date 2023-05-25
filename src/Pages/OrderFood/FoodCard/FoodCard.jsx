import React from 'react';

const FoodCard = ({ item }) => {

    const { name, price, recipe, image } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-800 text-white absolute right-0 mr-5 mt-4 p-2 rounded'>${price}</p>
            <div className="card-body ">
                <h2 className="card-title justify-center">{name}</h2>
                <p className='justify-center'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-[#E8E8E8] border-0 border-b-4 mt-2 border-[#BB8506] text-[#BB8506] btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;