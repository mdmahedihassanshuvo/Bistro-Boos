import React from 'react';
import Cover from '../../Shared/components/Cover';
import MenuItem from '../../Shared/components/MenuItem';
import { Link } from 'react-router-dom';
import Category from '../../Home/Category/Category';

const MenuCategory = ({ items, img, title }) => {
    return (
        <div className='lg:mb-12'>
            {title && <Cover img={img} title={title}/>}
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:mb-5'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className='text-center'><Link to={`/order/${title}`} className="btn btn-outline  border-b-4 border-black text-black lg:mt-5">Order Now</Link></div>
        </div>
    );
};

export default MenuCategory;