import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const [navItem, setNavItem] = useState(false);

  return (
    <div className="flex justify-between items-center font-bold font-Inter  max-w-7xl mx-auto px-4 lg:px-0">
      <div>
        <img className="w-[80px]" src={logo} alt="Logo" />
      </div>
      <div className="hidden lg:flex justify-between w-[60%]">
        <ul className="flex gap-10 text-text-medium  items-center nav">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/services">
            <li>Services</li>
          </NavLink>
          <NavLink to="/blog">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <Link className="text-2xl">
            <IoSearchOutline></IoSearchOutline>
          </Link>
          <Link className="text-2xl">
            <CiShoppingCart></CiShoppingCart>
          </Link>
          <button className="button">Appointment</button>
        </div>
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
              <li className="py-2 hover:bg-black">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="py-2 hover:bg-black">About</li>
            </NavLink>
            <NavLink to="/services">
              <li className="py-2 hover:bg-black">Services</li>
            </NavLink>
            <NavLink to="/blog">
              <li className="py-2 hover:bg-black">Blog</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="py-2 hover:bg-black">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
