import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path:'/eventDetails/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>,
            },
        ]
    }
])

export default router;