import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import Main from "../Layout/Main";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem";
import Payment from "../Pages/Dashboard/Payment";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/order/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <SignUp />
            },
            {
                path: '/contact',
                element: <PrivateRoute><ContactUs /></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'userhome',
                element: <UserHome/>
            },
            {
                path: 'myCart',
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment/>
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome/></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItem /></AdminRoute>
            },
        ]
    }
]);

export default router;