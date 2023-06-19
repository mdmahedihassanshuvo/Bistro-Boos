import React from 'react';
import img from '../../../assets/home/featured.jpg'
import moment from 'moment/moment';
import SectionTitle from '../../Shared/components/SectionTitle';
import './featured.css'

const Featured = () => {
    return (
        <div className='text-white bg-fixed lg:mb-[130px] featured-item lg:pt-[130px]'>
            <div className='lg:mb-12'>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                />
            </div>
            <div className='flex flex-col lg:flex-row mx-5 py-5 justify-center items-center gap-10 lg:pb-[130px] lg:mx-[200px]'>
                <div className='lg:w-[848px]'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p>{moment().format("MMM D, YYYY")}</p>
                    <p className='font-medium'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white lg:mt-5">Order Now   </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;