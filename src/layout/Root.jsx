import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import NavbarOrder from "../pages/shared/NavbarOrder";

const Root = () => {
  const location = useLocation();
  const navbarSetup = location.pathname.includes("login") || location.pathname.includes("register");
  return (
    <>
      <div className="border-b py-4">
        {navbarSetup ? <NavbarOrder></NavbarOrder> : <Navbar></Navbar>}
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
