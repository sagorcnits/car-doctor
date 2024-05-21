import { createBrowserRouter } from "react-router-dom";
import Order from "../layout/Order";
import Root from "../layout/Root";
import About from "../pages/about/About";
import ServiceAdd from "../pages/addService/ServiceAdd";
import Blog from "../pages/blog/Blog";
import CartDetails from "../pages/cartDetails/CartDetails";
import CheckOut from "../pages/checkOut/CheckOut";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Manage from "../pages/manage/Manage";
import NotFound from "../pages/notFound/NotFound";
import Register from "../pages/register/Register";
import Services from "../pages/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./public/service.json"),
      },

      {
        path: "/services",
        element: <Services></Services>,
      },

      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },

      {
        path: "/addservice",
        element: <ServiceAdd></ServiceAdd>,
      },


    ],
  },

  {
    path:"dashboard",
    element:<Order></Order>,
    children:[
      {
        path:"/dashboard/login",
        element:<Login></Login>
      },

      {
        path:"/dashboard/register",
        element:<Register></Register>
      },
      
      {
        path:"/dashboard/cartdetails",
        element:<CartDetails></CartDetails>
      },

      {
        path:"/dashboard/manage",
        element:<Manage></Manage>
      },
    ]
  }
]);

export default router;
