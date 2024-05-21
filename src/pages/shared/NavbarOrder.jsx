import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosPersonAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
const NavbarOrder = () => {
  const [navItem, setNavItem] = useState(false);
  const user = false;
  return (
    <div className="flex justify-between items-center font-bold font-Inter  max-w-7xl mx-auto px-4 lg:px-0">
      <div>
        <img className="w-[80px]" src={logo} alt="Logo" />
      </div>
      <div className="hidden lg:flex justify-between">
        <ul className="flex gap-10 text-text-medium  items-center nav">
          <NavLink to="/">
            <li>Order</li>
          </NavLink>
          <NavLink to="/dashboard/cartdetails">
            <li>Order Review</li>
          </NavLink>
          <NavLink to="/dashboard/inventory">
            <li>Manage Inventory</li>
          </NavLink>
          {user ? (
            <NavLink to="/dashboard/login">
              <li>Login</li>
            </NavLink>
          ) : (
            <div className="flex gap-4 items-center *:cursor-pointer text-[20px]">
              <IoIosPersonAdd></IoIosPersonAdd>
              <IoSearch></IoSearch>
              <GiSelfLove></GiSelfLove>
              <HiOutlineShoppingBag></HiOutlineShoppingBag>
            </div>
          )}
        </ul>
      </div>
      <div className="text-2xl lg:hidden" onClick={() => setNavItem(true)}>
        <FaBars className="cursor-pointer"></FaBars>
      </div>
      {navItem && (
        <div
          className={`absolute  top-0 bottom-0 w-[200px] ${
            navItem ? "right-0" : "right-[300px]"
          } bg-[#FF3811]  z-10 right-0 text-center`}
        >
          <div className="p-4 border-b ">
            <IoMdClose
              className="cursor-pointer font-bold text-2xl text-white"
              onClick={() => setNavItem(false)}
            ></IoMdClose>
          </div>
          <ul className=" gap-10  items-center nav text-white">
            <NavLink to="/">
              <li className="py-2 hover:bg-black">Order</li>
            </NavLink>
            <NavLink to="/about">
              <li className="py-2 hover:bg-black">Order Review</li>
            </NavLink>
            <NavLink to="/addservice">
              <li className="py-2 hover:bg-black">Manage Inventory</li>
            </NavLink>
            <NavLink to="/blog">
              <li className="py-2 hover:bg-black">Login</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarOrder;
