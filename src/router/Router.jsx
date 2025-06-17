import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AvailableCar from "../pages/AvailableCar/AvailableCar";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddCar from "../pages/AddCar/AddCar";
import PrivateRoute from "../context/PrivateRoute";
import Book from "../pages/Book/Book";
import Loading from "../components/Loading/Loading";
import MyBookingCar from "../pages/MyBookCar/MyBookingCar";
import MyCars from "../pages/MyCar/MyCars";
import ErrorPage from "../pages/Error/ErrorPage";


export const router =createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path:'/addcar',
                element:<PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path:'/book/:id',
                Component:Book,
                hydrateFallbackElement:<Loading></Loading>,
                loader:({params})=>fetch(`https://cars-server-side.vercel.app/cars/available/${params.id}`)
            },
            {
                path:'/myBookingCar',
                element:<PrivateRoute><MyBookingCar></MyBookingCar></PrivateRoute>
            },
            {
                path:"/mycar",
                element:<PrivateRoute><MyCars></MyCars></PrivateRoute>
            },
        ]
    }
])