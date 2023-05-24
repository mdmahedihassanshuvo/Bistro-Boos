import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import img6 from '../../../assets/home/chef-service.jpg'
import SectionTitle from '../../Shared/components/SectionTitle';

const Category = () => {
    return (
        <div className='mx-5 mb-5 lg:mb-0 lg:mx-0'>
            <div>
                <SectionTitle
                subHeading = {'From 11:00am to 10:00pm'}
                heading = {"ORDER ONLINE"}
                ></SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                autoplay={true}
                modules={[Pagination]}
                className="mySwiper lg:mb-[90px]"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            </Swiper>
            <div className='lg:mb-[90px] hidden md:block relative'>
                <div>
                    <img src={img6} alt="" />
                </div>
                <div className='text-center space-y-2 lg:mx-[112px] lg:my-[120px] lg:px-[165px]  -bottom-16  bg-white lg:py-[96px] absolute'>
                    <h2 className='text-4xl'>Bistro Boss</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Category;