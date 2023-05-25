import React, { useState } from 'react';
import Cover from '../Shared/components/Cover';
import orderImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from './FoodCard/FoodCard';
import OrderItem from './OrderItem/OrderItem';
import { useParams } from 'react-router-dom';

const OrderFood = () => {

    const categories = ["dessert", "pizza", "salad", "soup", "drinks"]
    const {category} = useParams()
    const initialValue = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialValue)
    const [menu] = useMenu()
    console.log(category)
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'popular')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div className='lg:mb-[130px] '>
            <Cover img={orderImg} title="Order food" />
            <div className='mx-auto'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='text-center lg:mb-12 flex justify-center gap-5'>
                        <Tab className='btn border-b-4 border-accent bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0'>Dessert</Tab>
                        <Tab className='btn border-b-4 border-accent bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0'>Pizza</Tab>
                        <Tab className='btn border-b-4 border-accent bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0'>Salad</Tab>
                        <Tab className='btn border-b-4 border-accent bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0'>Soup</Tab>
                        <Tab className='btn border-b-4 border-accent bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0'>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderItem
                        item={dessert}
                        />
                    </TabPanel>
                    <TabPanel>
                        <OrderItem
                        item={pizza}
                        />
                    </TabPanel>
                    <TabPanel>
                        <OrderItem
                        item={salad}
                        />
                    </TabPanel>
                    <TabPanel>
                        <OrderItem
                        item={soup}
                        />
                    </TabPanel>
                    <TabPanel>
                        <OrderItem
                        item={drinks}
                        />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;