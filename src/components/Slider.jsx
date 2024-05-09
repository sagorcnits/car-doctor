import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import teamImg1 from "../assets/images/team/1.jpg";
import teamImg2 from "../assets/images/team/2.jpg";
import teamImg3 from "../assets/images/team/3.jpg";
// Import Swiper styles
import "swiper/css/bundle";
import ReviewCard from "./ReviewCard";
import TeamCard from "./TeamCard";

const Slider = ({ review }) => {
  return (
    <Swiper
      loop={true}
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={true}
      breakpoints={
        review == "review"
          ? {
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }
          : {
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }
      }
      spaceBetween={50}
    >
      {review == "review" ? (
        <>
          <SwiperSlide>
            <ReviewCard></ReviewCard>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard></ReviewCard>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard></ReviewCard>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard></ReviewCard>
          </SwiperSlide>{" "}
        </>
      ) : (
     <>
          <SwiperSlide>
            <TeamCard teamImg={teamImg1}></TeamCard>
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard teamImg={teamImg2}></TeamCard>
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard teamImg={teamImg3}></TeamCard>
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard teamImg={teamImg1}></TeamCard>
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard teamImg={teamImg1}></TeamCard>
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard teamImg={teamImg1}></TeamCard>
          </SwiperSlide>
     </>
      )}
    </Swiper>
  );
};

export default Slider;
