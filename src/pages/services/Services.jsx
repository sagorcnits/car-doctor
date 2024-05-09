import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceImg from "../../assets/images/services/1.jpg";
import serviceBannerImg from "../../assets/images/services/checkout.png";
import EnginCard from "../../components/EnginCard";
import StepCard from "./StepCard";

const Services = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${serviceBannerImg})` }}
        className="bg-no-repeat bg-cover bg-blend-multiply bg-[#8ba0b1] h-[300px] rounded-md overflow-hidden relative mt-14"
      >
        <div className="w-[90%] mx-auto mt-24">
          <h1 className="text-white text-[30px] font-bold font-Inter">
            Service Details
          </h1>
        </div>
        <span className="service-banner-btn font-Inter">
          <Link to="/">Home</Link>/<Link to="/services">Service Details</Link>
        </span>
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-20">
        <div className="md:col-span-4 lg:col-span-3">
          <div
            style={{ backgroundImage: `url(${serviceImg})` }}
            className=" h-[450px] bg-cover rounded-md"
          ></div>
          <h1 className="text-[35px] text-[#151515] font-Inter font-bold py-8">
            Unique Car Engine Service
          </h1>
          <p className="text-[#737373] font-Inter">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <EnginCard></EnginCard>
            <EnginCard></EnginCard>
            <EnginCard></EnginCard>
            <EnginCard></EnginCard>
          </div>
          <p className="text-[#737373] font-Inter py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <h1 className="text-[35px] text-[#151515] font-Inter font-bold py-4">
            3 Simple Steps to Process
          </h1>
          <p className="text-[#737373] font-Inter py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <StepCard step={{num:1, title:"Step One"}}></StepCard>
            <StepCard step={{num:2, title:"Step Two"}}></StepCard>
            <StepCard step={{num:3, title:"Step Three"}}></StepCard>
          </div>
          <div
            
            className=" h-[450px] bg-cover rounded-md mt-10 overflow-hidden"
          >
            <video controls src="https://videos.pexels.com/video-files/3066427/3066427-uhd_4096_2160_24fps.mp4"></video>
          </div>
        </div>
        <div>
          <div className="bg-[#F3F3F3] p-6 rounded-md">
            <h1 className="text-[#151515] font-Inter font-bold text-[25px]">
              Services
            </h1>
            <div className=" cursor-pointer text-[#FF3811] flex justify-between items-center mt-6 bg-white p-5 rounded-md hover:bg-[#FF3811] duration-500 hover:text-white">
              <span className=" font-Inter font-bold text-[16px]">
                Full Car Repair
              </span>
              <FaArrowRight className="cursor-pointer "></FaArrowRight>
            </div>
            <div className=" cursor-pointer text-[#FF3811] flex justify-between items-center mt-6 bg-white p-5 rounded-md hover:bg-[#FF3811] duration-500 hover:text-white">
              <span className=" font-Inter font-bold text-[16px]">
                Engine Repair
              </span>
              <FaArrowRight className="cursor-pointer "></FaArrowRight>
            </div>
            <div className=" cursor-pointer text-[#FF3811] flex justify-between items-center mt-6 bg-white p-5 rounded-md hover:bg-[#FF3811] duration-500 hover:text-white">
              <span className=" font-Inter font-bold text-[16px]">
                Automatic Services
              </span>
              <FaArrowRight className="cursor-pointer "></FaArrowRight>
            </div>
            <div className=" cursor-pointer text-[#FF3811] flex justify-between items-center mt-6 bg-white p-5 rounded-md hover:bg-[#FF3811] duration-500 hover:text-white">
              <span className=" font-Inter font-bold text-[16px]">
                Engine Oil Change
              </span>
              <FaArrowRight className="cursor-pointer "></FaArrowRight>
            </div>
            <div className=" cursor-pointer text-[#FF3811] flex justify-between items-center mt-6 bg-white p-5 rounded-md hover:bg-[#FF3811] duration-500 hover:text-white">
              <span className=" font-Inter font-bold text-[16px]">
                Battery Charge
              </span>
              <FaArrowRight className="cursor-pointer "></FaArrowRight>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
