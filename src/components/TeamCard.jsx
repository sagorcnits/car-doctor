import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const TeamCard = ({teamImg}) => {
  return (
    <div className="card productCart p-4 border cursor-pointer relative">
      <figure className="bg-[#F3F3F3] py-3 rounded-md h-[200px] overflow-hidden">
        <img src={teamImg} alt="Shoes" className="rounded-xl w-full " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[25px] font-Inter font-bold py-2">
          Car Engine Plug
        </h2>
        <p className="text-[#FF3811] font-Inter font-semibold">Engine Expert</p>
        <div className="flex *:cursor-pointer gap-2 items-center *:text-[30px] pt-3">
          <FaFacebook></FaFacebook>
          <AiFillTwitterCircle></AiFillTwitterCircle>
          <FaLinkedinIn></FaLinkedinIn>
          <FaInstagram></FaInstagram>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
