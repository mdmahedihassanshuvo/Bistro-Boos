import React from 'react';

const MenuItem = ({ item }) => {

    // console.log(item)
    const { name, price, recipe, image } = item;

    return (
        <div className='flex items-center gap-4 mx-5 mb-5 lg:mb-0'>
            <div>
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className='w-[120px]' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-xl lg:text-3xl'>{name} ----------</h2>
                <p className='text-sm lg:text-base'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]  lg:text-xl'>${price}</p>
        </div>
    );
};

export default MenuItem;