import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <>
      <div className="border-b py-4">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
