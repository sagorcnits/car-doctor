import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <>
      <div className="border-b py-4">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
