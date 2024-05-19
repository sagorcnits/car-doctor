import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import CheckOut from "../pages/checkOut/CheckOut";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    ],
  },
]);

export default router;
