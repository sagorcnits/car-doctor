import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavbarOrder from "../pages/shared/NavbarOrder";

const Order = () => {
  return (
    <>
      <div className="border-b py-4">
        <NavbarOrder></NavbarOrder>
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Order;
