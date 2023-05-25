import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/components/SectionTitle';
import MenuItem from '../../Shared/components/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopulerMenu = () => {

    const [menu] = useMenu()

    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div className='lg:mb-[130px]'>
            <div className='lg:mb-12'>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                />
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default PopulerMenu;