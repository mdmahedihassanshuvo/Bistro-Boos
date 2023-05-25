import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/components/Cover';
import img from '../../assets/menu/banner3.jpg';
import UseHooks from '../../Hooks/useMenu';
import SectionTitle from '../Shared/components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';

const Menu = () => {
    
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'popular')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={img} title={'our menu'}/>
            <SectionTitle
            subHeading={"Don't miss"}
            heading={"TODAY'S OFFER"}
            />
            <MenuCategory
            items={offered}
            />
            <MenuCategory
            items={dessert}
            img={dessertImg}
            title="dessert"
            />
            <MenuCategory
            items={pizza}
            img={pizzaImg}
            title="pizza"
            />
            <MenuCategory
            items={salad}
            img={saladImg}
            title="salad"
            />
            <MenuCategory
            items={soup}
            img={soupImg}
            title="soup"
            />
            
        </div>
    );
};

export default Menu;