import React from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
export default (() => {
  // Create array with 1000 slides
  const slides = Array.from({
    length: 10
  }).map((el, index) => `Slide ${index + 1}`);
  const swiperRef = React.useRef<any>();
  return <div>
      <button onClick={() => swiperRef.current?.slidePrev()}>{window._$m.t('向左')}</button>
      <button onClick={() => swiperRef.current?.slideNext()}>{window._$m.t('向右')}</button>
      <Swiper modules={[Virtual]} spaceBetween={16} slidesPerView={4} virtual loop onSwiper={(swiper: any) => swiperRef.current = swiper} style={{
      width: 300,
      height: 300
    }}>
        {slides.map((slideContent, index) => <SwiperSlide key={slideContent} virtualIndex={index}>
            <div style={{
          backgroundColor: "#ededed",
          width: "100%",
          height: "100%",
          position: "relative"
        }}>
              <div style={{
            position: "absolute",
            top: 0,
            left: 0
          }}>
                {slideContent}
              </div>
              <img style={{
            width: "100%",
            height: "100%"
          }} src="https://ckb-service-test.oss-cn-hangzhou.aliyuncs.com/sale_manage_1698811021916.png" />
            </div>
          </SwiperSlide>)}
      </Swiper>
    </div>;
});