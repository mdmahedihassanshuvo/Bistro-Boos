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
                element: <PrivateRoute><ContactUs/></PrivateRoute>
            }
        ]
    },
    {
        path : '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: 'myCart',
                element: <MyCart/>
            },
            {
                path: 'allusers',
                element: <AllUsers/>
            }
        ]
    }
]);

export default router;