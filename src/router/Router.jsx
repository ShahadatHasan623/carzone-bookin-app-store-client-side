import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AvailableCar from "../pages/AvailableCar/AvailableCar";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


export const router =createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                path:'/',
                Component:Home
            },
            {
                path:'/available',
                Component:AvailableCar,
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            }
        ]
    }
])