import aboutImg2 from "../../assets/images/about_us/parts.jpg";
import aboutImg from "../../assets/images/about_us/person.jpg";
import Banner from "../../components/Banner";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col md:flex-row gap-10 mt-16 pb-10">
        <div className="flex-1 relative md:h-[450px]">
          <img className="md:w-[90%] mx-auto rounded-md" src={aboutImg} alt="" />
         <div className="absolute hidden md:block p-3 w-[300px] h-[300px] bg-white rounded-md bottom-0 right-0">
           <img className="w-full h-full" src={aboutImg2} alt="" />
         </div>
        </div>
        <div className="flex-1">
          <p className="font-Inter font-bold text-[#FF3811]">About us</p>
          <h1 className="text-[40px] font-inter font-bold leading-10 py-2">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className=" text-paragraph-text py-4 font-inter">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-paragraph-text py-4 font-inter">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="button  bg-[#FF3811] text-white hover:bg-black border-none">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
