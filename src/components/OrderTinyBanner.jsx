import serviceBannerImg from "../assets/images/services/checkout.png";
const OrderTinyBanner = ({info}) => {
  return (
    <div
      style={{ backgroundImage: `url(${serviceBannerImg})` }}
      className="bg-no-repeat bg-cover bg-blend-multiply bg-[#8ba0b1] h-[300px] rounded-md overflow-hidden relative mt-14"
    >
      <div className="w-[90%] mx-auto mt-24">
        <h1 className="text-white text-[30px] font-bold font-Inter">
          {info.title}
        </h1>
        <p className="text-[#FF3811] font-Inter">{info.descrip}</p>
      </div>
     
    </div>
  );
};

export default OrderTinyBanner;
