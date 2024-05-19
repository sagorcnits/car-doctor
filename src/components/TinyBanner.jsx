import { Link } from "react-router-dom";
import serviceBannerImg from "../assets/images/services/checkout.png";

const TinyBanner = ({info}) => {
  return (
    <div
      style={{ backgroundImage: `url(${serviceBannerImg})` }}
      className="bg-no-repeat bg-cover bg-blend-multiply bg-[#8ba0b1] h-[300px] rounded-md overflow-hidden relative mt-14"
    >
      <div className="w-[90%] mx-auto mt-24">
        <h1 className="text-white text-[30px] font-bold font-Inter">
        {info.title}
        </h1>
      </div>
      <span className="service-banner-btn font-Inter">
        <Link to="/">Home</Link>/<Link>{info.buttonTitle}</Link>
      </span>
    </div>
  );
};

export default TinyBanner;
