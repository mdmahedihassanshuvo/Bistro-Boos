import React from 'react';
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { MdMarkEmailUnread } from "react-icons/md";
import UseCart from '../Hooks/UseCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [cart] = UseCart()

    //TODO: load data from the server to have dynamic admin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin()

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-black">
                        {
                            isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/home'><FaHome />ADMIN HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/additem'><FaUtensils />ADD ITEMS</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageitems'><FaBars />MANAGE ITEMS</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/history'><FaBook />MANAGE BOOKINGS</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allusers'><FaUsers />ALL USERS</NavLink>
                            </li>
                            
                        </> :
                        <>
                            <li>
                                <NavLink to='/dashboard/home'><FaHome />User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'><FaCalendarAlt />RESERVATION</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/history'><FaWallet />PAYMENT HISTORY</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/myCart'>
                                    <FaShoppingCart />MY CART <span className="flex gap-2">
                                        <div className="badge badge-secondary">{cart?.length || '0'}</div>
                                    </span>
                                </NavLink>
                            </li>
                        </>
                        }

                        <div className="divider">OR</div>
                        <li>
                            <NavLink to='/'><FaHome />HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu'><FaBars />MENU</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/dessert'><FaShoppingBag />SHOP</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/contact'><MdMarkEmailUnread />CONTACT</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;