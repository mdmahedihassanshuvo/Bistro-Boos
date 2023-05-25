import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const navItems = <>
        <li>
            <NavLink
                to={'/'}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-4 border-accent"
                        : "hover:border-b-4 hover:border-accent"
                }
            >
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/contact'}
                className={({ isActive }) =>
                    isActive
                        ? "active"
                        : "hover:border-b-4 hover:border-accent"
                }
            >
                CONTACT US
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/dashboard'}
                className={({ isActive }) =>
                    isActive
                        ? "active"
                        : "hover:border-b-4 hover:border-accent"
                }
            >
                DASHBOARD
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/menu'}
                className={({ isActive }) =>
                    isActive
                        ? "active"
                        : "hover:border-b-4 hover:border-accent"
                }
            >
                OUR MENU
            </NavLink>
        </li>
        <li>
            <NavLink
                to={`/order/${'dessert'}`}
                className={({ isActive }) =>
                    isActive
                        ? "active"
                        : "hover:border-b-4 hover:border-accent"
                }
            >
                ORDER FOOD
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/login'}
                className={({ isActive }) =>
                    isActive
                        ? "active"
                        : "hover:border-b-4 hover:border-accent"
                }
            >
                LOGIN
            </NavLink>
        </li>
    </>

    return (
        <div className='text-white'>
            <navbar className="navbar py-4 fixed z-20 bg-black bg-opacity-30 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="flex flex-col items-center uppercase"><span className='text-xl'>Bistro Boss</span> <span className='text-sm tracking-widest'>Restaurant</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </navbar>
        </div>
    );
};

export default Header;