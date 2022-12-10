import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layouts/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ReviewEdit from "../Pages/ReviewEdit/ReviewEdit";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServicePage from "../Pages/Services/ServicePage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`https://metaial-server-hridoy-islam.vercel.app/services/latest`)
            },
            {
                path: "/services",
                element: <ServicePage></ServicePage>,
                loader: () => fetch(`https://metaial-server-hridoy-islam.vercel.app/services`)
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://metaial-server-hridoy-islam.vercel.app/services/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
                
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: '/myreviews/:id',
                element: <PrivateRoute><ReviewEdit></ReviewEdit></PrivateRoute>,
                loader: ({params})=> fetch(`https://metaial-server-hridoy-islam.vercel.app/review/${params.id}`)
            },

        ],
    },
]);

export default router;