import bannerImg1 from "../assets/images/banner/1.jpg";
import bannerImg2 from "../assets/images/banner/2.jpg";
import bannerImg3 from "../assets/images/banner/3.jpg";
import bannerImg4 from "../assets/images/banner/4.jpg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] md:h-[550px] mt-14">
      <div
        style={{ backgroundImage: `url(${bannerImg1})` }}
        id="slide1"
        className="carousel-item relative w-full h-full bg-no-repeat bg-cover bg-blend-multiply bg-[#8ba0b1]"
      >
        <div className="md:w-[550px] flex flex-col gap-4 absolute top-16 md:top-28 left-8 md:left-40">
          <h1 className=" md:text-[60px] font-Inter text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 text-white mt-8">
            <button className="button">Discover More</button>
            <button className="button">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-4 bottom-4 md:bottom-10 right-4 md:right-10">
          <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bannerImg2})` }}
        id="slide2"
        className="carousel-item relative w-full  h-full bg-no-repeat bg-cover bg-blend-multiply bg-[#8ba0b1]"
      >
        <div className="md:w-[550px] flex flex-col gap-4 absolute top-16 md:top-28 left-8 md:left-40">
          <h1 className=" md:text-[60px] font-Inter text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 text-white mt-8">
            <button className="button">Discover More</button>
            <button className="button">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-4 bottom-4 md:bottom-10 right-4 md:right-10">
          <a href="#slide1" className="btn btn-circle bg-[#FF3811]">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bannerImg3})` }}
        id="slide3"
        className="carousel-item relative w-full  h-full bg-no-repeat bg-cover bg-blend-multiply bg-[#8ba0b1]"
      >
        <div className="md:w-[550px] flex flex-col gap-4 absolute top-16 md:top-28 left-8 md:left-40">
          <h1 className=" md:text-[60px] font-Inter text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 text-white mt-8">
            <button className="button">Discover More</button>
            <button className="button">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-4 bottom-4 md:bottom-10 right-4 md:right-10">
          <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bannerImg4})` }}
        id="slide4"
        className="carousel-item relative w-full  h-full bg-no-repeat bg-cover bg-blend-multiply bg-[#8ba0b1]"
      >
        <div className="md:w-[550px] flex flex-col gap-4 absolute top-16 md:top-28 left-8 md:left-40">
          <h1 className=" md:text-[60px] font-Inter text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 text-white mt-8">
            <button className="button">Discover More</button>
            <button className="button">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-4 bottom-4 md:bottom-10 right-4 md:right-10">
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811]">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
