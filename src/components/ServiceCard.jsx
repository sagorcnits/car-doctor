import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="border border-[#E8E8E8] card-shadow rounded-md cursor-pointer p-3 ">
      <figure>
        <img className="w-full mx-auto" src={service.img} alt="" />
      </figure>
      <h1 className="text-[#444] font-bold text-[24px] py-2">
        {service.title}
      </h1>
      <div className="flex text-[#FF3811] justify-between items-center">
        <p className="text-[20px]  font-bold font-Inter py-2">Price : ${service.price}</p>
        <FaArrowRight className="cursor-pointer"></FaArrowRight>
      </div>
    </div>
  );
};

export default ServiceCard;
