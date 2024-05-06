import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import aboutImg2 from "../../assets/images/about_us/parts.jpg";
import aboutImg from "../../assets/images/about_us/person.jpg";
import teamImg1 from "../../assets/images/team/1.jpg";
import teamImg2 from "../../assets/images/team/2.jpg";
import teamImg3 from "../../assets/images/team/3.jpg";
import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import Section_Intro from "../../components/Section_Intro";
import ServiceCard from "../../components/ServiceCard";
import ServiceContact from "../../components/ServiceContact";
import TeamCard from "../../components/TeamCard";
const Home = () => {
  const serviceData = useLoaderData();
  const [product, setProduct] = useState([]);
  // axios data fetch
  useEffect(() => {
    axios.get("./public/product.json").then((res) => setProduct(res.data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col md:flex-row gap-10 mt-16 pb-10">
        <div className="flex-1 relative md:h-[450px]">
          <img
            className="md:w-[90%] mx-auto rounded-md"
            src={aboutImg}
            alt=""
          />
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
          <button className="button  bg-[#FF3811] text-white hover:bg-black border-none">
            Get More Info
          </button>
        </div>
      </div>
      <section className="mt-10">
        <Section_Intro
          headerTitle={{ small: "Service", title: "Our Service Area" }}
        ></Section_Intro>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {serviceData.map((service, id) => (
            <ServiceCard key={id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="button">More Service</button>
        </div>
        <div className="bg-[#151515] md:gap-10 rounded-md md:p-10 grid md:grid-cols-3 mt-20">
          <ServiceContact icon={"calender"}></ServiceContact>
          <ServiceContact icon={"call"}></ServiceContact>
          <ServiceContact icon={"location"}></ServiceContact>
        </div>
      </section>
      <section className="mt-10">
        <Section_Intro
          headerTitle={{
            small: "Popular Products",
            title: "Browse Our Products",
          }}
        ></Section_Intro>
        <div className="gap-10  grid md:grid-cols-2 lg:grid-cols-3 mt-20">
          {product.map((product, id) => (
            <ProductCard key={id} product={product}></ProductCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="button">More Product</button>
        </div>
      </section>
      <section className="mt-10">
        <Section_Intro
          headerTitle={{
            small: "Team",
            title: "Meet Our Team",
          }}
        ></Section_Intro>
        <div className="gap-10  grid md:grid-cols-2 lg:grid-cols-3 mt-20">
          <TeamCard teamImg={teamImg3}></TeamCard>
          <TeamCard teamImg={teamImg2}></TeamCard>
          <TeamCard teamImg={teamImg1}></TeamCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
