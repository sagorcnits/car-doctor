import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
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
    ],
  },
]);

export default router;
