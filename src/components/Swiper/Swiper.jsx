import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import banner1 from "../../assets/banners/BannerPromo.png";
import banner2 from "../../assets/banners/bannerPromo-Macro.png";
import banner3 from "../../assets/banners/bannerPromo-Nave.png";

register();

export const SwiperSlider = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    // swiperElRef.current.addEventListener("swiperprogress", (e) => {
    //   const [swiper, progress] = e.detail;
    //   console.log(progress);
    // });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      loop="true"
    >
      <swiper-slide>
        <img src={banner1} style={{ width: "100%" }} />
      </swiper-slide>
      <swiper-slide>
        <img src={banner2} style={{ width: "100%" }} />
      </swiper-slide>
      <swiper-slide>
        <img src={banner3} style={{ width: "100%" }} />
      </swiper-slide>
      ...
    </swiper-container>
  );
};

// export default () => {
//   return (
//     <SwiperContainer>
//       <Swiper
//         centeredSlides={true}
//         pagination={true}
//         modules={[Pagination]}
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="../BannerTest.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//       </Swiper>
//     </SwiperContainer>
//   );
// };
