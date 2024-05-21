import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import serviceImg from "../../assets/images/services/1.jpg";
import logo from "../../assets/logo.svg";
import EnginCard from "../../components/EnginCard";
import ServiceList from "../../components/ServiceList";
import TinyBanner from "../../components/TinyBanner";
import StepCard from "./StepCard";
const Services = () => {
  return (
    <>
     <Helmet>
        <title>Car Doctor - service</title>
      </Helmet>
     <TinyBanner info={{title:"Service Details", buttonTitle:"Service"}}></TinyBanner>
      <div className="grid lg:grid-cols-4 gap-4 mt-20">
        <div className="lg:col-span-3">
          <div
            style={{ backgroundImage: `url(${serviceImg})` }}
            className="h-[350px] md:h-[450px] bg-cover rounded-md"
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
          <div className="grid md:grid-cols-2 gap-10 mt-10">
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
            <StepCard step={{ num: 1, title: "Step One" }}></StepCard>
            <StepCard step={{ num: 2, title: "Step Two" }}></StepCard>
            <StepCard step={{ num: 3, title: "Step Three" }}></StepCard>
          </div>
          <div className="md:h-[450px] bg-cover rounded-md mt-10 overflow-hidden ">
            <video
              controls
              src="https://videos.pexels.com/video-files/3066427/3066427-uhd_4096_2160_24fps.mp4"
            ></video>
          </div>
        </div>
        <div>
          <div className="bg-[#F3F3F3] p-6 rounded-md">
            <h1 className="text-[#151515] font-Inter font-bold text-[25px]">
              Services
            </h1>
            <ServiceList title={"Full Car Repair"}></ServiceList>
            <ServiceList title={"Engine Repair"}></ServiceList>
            <ServiceList title={"Automatic Services"}></ServiceList>
            <ServiceList title={"Engine Oil Change"}></ServiceList>
            <ServiceList title={"Battery Charge"}></ServiceList>
          </div>
          <div className="bg-[#151515] p-6 text-white font-Inter rounded-md mt-8">
            <h1 className="text-[25px] py-2 font-bold">Download</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FaFileArrowDown className="text-[25px]"></FaFileArrowDown>
                <div>
                  <h1 className="font-bold">Our Brochure</h1>
                  <p>Download</p>
                </div>
              </div>
              <div className="button">
                <FaArrowRight></FaArrowRight>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-4">
                <FaFileArrowDown className="text-[25px]"></FaFileArrowDown>
                <div>
                  <h1 className="font-bold">Company Details</h1>
                  <p>Download</p>
                </div>
              </div>
              <div className="button">
                <FaArrowRight></FaArrowRight>
              </div>
            </div>
          </div>
          <div className="bg-[#151515] px-8 py-10 text-white font-Inter rounded-md mt-8">
            <img className="block mx-auto mt-6" src={logo} alt="" />
            <h1 className="text-[20px] text-balance text-center py-2">
              Need Help? We Are Here To Help You
            </h1>
            <div className="bg-white text-center text-[#151515] font-bold px-4 pb-8 pt-4 rounded-md relative ">
              <h1 className="text-[20px]">
                <span className="text-[#FF3811]">Car Doctor</span> Speacial
              </h1>
              <p>
                Save up to <span className="text-[#FF3811]">60% off</span>
              </p>
              <button className="button absolute lg:left-14 left-[28%] md:left-[45%] bg-[#FF3811] text-white hover:bg-black duration-500">
                Get A Quote
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-[34px] font-bold">Price $250.00</h1>
            <Link to="/checkout">
              <button className="button bg-[#FF3811] text-white w-full mt-6 hover:bg-black duration-500">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
