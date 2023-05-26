import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/components/Cover';
import contactImg from '../../assets/contact/banner.jpg'
import SectionTitle from '../Shared/components/SectionTitle';
import { FaClock, FaMapMarkedAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>
            <Cover img={contactImg} title="Contact us"/>
            <SectionTitle
            subHeading={"Visit Us"}
            heading={"OUR LOCATION"}
            />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-5 lg:mb-12'>
                <div className='border-2'>
                    <p className='bg-[#D1A054] text-white py-5 mx-auto'><FaPhoneAlt className='mx-auto text-xl'/></p>
                    <div className='bg-[#F3F3F3] mx-5 mb-5 flex lg:h-[220px] flex-col gap-2 justify-center items-center'>
                        <h1 className='text-2xl uppercase font-medium'>phone</h1>
                        <p>(+880) 171 9062 066</p>
                    </div>
                </div>
                <div className='border-2'>
                    <p className='bg-[#D1A054] text-white py-5 mx-auto'><FaMapMarkedAlt className='mx-auto text-xl'/></p>
                    <div className='bg-[#F3F3F3] mx-5 mb-5 flex lg:h-[220px] flex-col gap-2 justify-center items-center'>
                        <h1 className='text-2xl uppercase font-medium'>address</h1>
                        <p>(+880) 171 9062 066</p>
                    </div>
                </div>
                <div className='border-2'>
                    <p className='bg-[#D1A054] text-white py-5 mx-auto'><FaClock className='mx-auto text-xl'/></p>
                    <div className='bg-[#F3F3F3] mx-5 mb-5 flex lg:h-[220px] flex-col gap-2 justify-center items-center'>
                        <h1 className='text-2xl uppercase font-medium'>WORKING HOURS</h1>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;