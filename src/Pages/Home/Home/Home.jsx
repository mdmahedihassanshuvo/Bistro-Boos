import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import Featured from '../Featured/Featured';
import Recommend from '../Recommends/Recommend';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopulerMenu/>
            <Recommend/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;