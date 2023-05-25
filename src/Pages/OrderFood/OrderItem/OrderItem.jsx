import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const OrderItem = ({ item }) => {
    const itemsPerPage = 6;

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    // Calculate the number of pages based on the number of items and items per page
    const totalPages = Math.ceil(item.length / itemsPerPage);

    // Create an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    // console.log((2 - 1) * itemsPerPage, 2 * itemsPerPage)
    return (
        <div>
            <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
                {pageNumbers.map((page) => (
                    <SwiperSlide key={page} >
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:mb-[70px]">
                        {item
                            .slice((page - 1) * itemsPerPage, page * itemsPerPage) // Get the items for the current page
                            .map((item) => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderItem;
