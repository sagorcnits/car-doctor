import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="pt-20 px-10 bg-[#151515] mt-20 font-Inter">
      <footer className="footer justify-between max-w-7xl mx-auto border-b pb-6 text-white">
        <aside>
          <img src={logo} alt="" />
          <p>
            Edwin Diaz is a software and web technologies engineer, <br /> a
            life coach trainer who is also a serial .
          </p>
          <div className="flex *:cursor-pointer gap-2 items-center *:text-[20px] pt-3">
            <FaFacebook></FaFacebook>
            <AiFillTwitterCircle></AiFillTwitterCircle>
            <FaLinkedinIn></FaLinkedinIn>
            <FaInstagram></FaInstagram>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover mt-4">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover mt-4">Why Car Doctor </a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover mt-4">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbility</a>
        </nav>
      </footer>
      <p className="text-center text-white py-10">
        Copyright © 2024 - All right reserved by Car Doctor Ltd
      </p>
    </div>
  );
};

export default Footer;
