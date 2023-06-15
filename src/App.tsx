import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Zoom } from 'swiper';

// Import Swiper styles
import "swiper/swiper-bundle.css";
// // import "swiper/css/zoom";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Zoom]);

export default function App() {

  return (
    <>
      <Swiper

      id="main"
      // thumbs={{ swiper: thumbsSwiper }}
      // controller={{ control: controlledSwiper }}
      tag="section"
      wrapperTag="ul"
      // navigation={true}
      // pagination
      zoom={true}
      pagination={{
        clickable:true
      }}
      navigation={{
        
      }}
      spaceBetween={0}
      slidesPerView={1}
      onInit={(swiper) => console.log('Swiper initialized!', swiper)}
      onSlideChange={(swiper) => {
        console.log('Slide index changed to: ',);
      }}
      onReachEnd={() => console.log('Swiper end reached')}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/b556cc3f85ac4c1baa4b214736ffc22c/content" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/c50b3e44a5634874bfdec41cce412fdc/content" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/ec5f9ba1ec58428290f00798f03b19ad/content" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/44ae66fc97db467c8a195b7e3963e5a1/content" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/c2684d5adcb34af2a4299f4a88cb3b59/content" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/c39a5e01c0e24e96b36260aec35b0269/content" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/dec0e16beadd4556a6b02900ea3d0b96/content" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/a011dcc4777e4c88b074ded8d85934c0/content" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://d1820pa95bipcd.cloudfront.net/files/4643498d9fa64de588b49875cdeb3b28/content" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="" style={{width:"100px", height:"100px", color:"red", backgroundColor:"black"}}>
      eskjkldskldskldslk

      </div>
    </>
  );
}
