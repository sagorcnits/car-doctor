import { FcCalendar } from "react-icons/fc";
import { MdAddLocationAlt, MdOutlineWifiCalling3 } from "react-icons/md";
const ServiceContact = ({ icon }) => {
  const iconVerify = () => {
    if (icon == "calender") {
      return <FcCalendar></FcCalendar>;
    } else if (icon == "call") {
      return <MdOutlineWifiCalling3></MdOutlineWifiCalling3>;
    } else {
      return <MdAddLocationAlt></MdAddLocationAlt>;
    }
  };

  const icons =  iconVerify(icon)

  return (
    <div className="flex gap-4 items-center font-Inter text-white h-[130px] md:h-[200px] mx-auto md:mx-0">
      <p className="text-[50px] text-[#FF3811]"> {icons}</p>
      <div>
        <p>We are open monday-friday</p>
        <h1 className="text-[30px] font-bold">7:00 am - 9:00 pm</h1>
      </div>
    </div>
  );
};

export default ServiceContact;
