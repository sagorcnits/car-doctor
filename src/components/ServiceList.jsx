import { FaArrowRight } from "react-icons/fa";

const ServiceList = ({ title }) => {
  return (
    <div className=" cursor-pointer text-[#FF3811] flex justify-between items-center mt-6 bg-white p-5 rounded-md hover:bg-[#FF3811] duration-500 hover:text-white">
      <span className=" font-Inter font-bold text-[16px]">{title}</span>
      <FaArrowRight className="cursor-pointer "></FaArrowRight>
    </div>
  );
};

export default ServiceList;
