import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className='lg:mb-[130px]'>
            <div className='lg:mb-12'>
                <SectionTitle
                    subHeading={'What Our Clients Say'}
                    heading={'TESTIMONIALS'}
                />
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col items-center lg:mx-8'>
                                <Rating
                                    className='lg:mb-12'
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='lg:mb-12'><FaQuoteLeft className='text-7xl' /></p>
                                <p className='lg:mb-10'>{review.details}</p>
                                <h3 className='text-3xl mb-2 text-[#CD9003]'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;