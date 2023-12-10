import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const ImageCarousel = () => {
  const images = [
    "/images/img1.webp",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ];

  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" "
      >
        {images.map((val, i) => (
          <SwiperSlide key={i} className="text-center">
            <div className=" h-[30vh] lg:h-[70vh] ">
              <img className="w-full h-full object-cover object-left-top" src={val} alt="loading..." />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
