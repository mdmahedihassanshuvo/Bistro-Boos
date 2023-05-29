import React from 'react';
import { FaBars, FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { MdMarkEmailUnread } from "react-icons/md";
import UseCart from '../Hooks/UseCart';

const Dashboard = () => {

    const [cart] = UseCart()

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-black">
                        {/* <!-- Sidebar content here --> */}
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