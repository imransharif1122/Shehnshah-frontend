import React from 'react';
import Carousel from 'react-multi-carousel';
import Style from "./serviceSlider.module.css";
import DetailCar from "../../assets/svg/detailCar.svg";
import DetailOil from "../../assets/svg/detailOil.svg";
import DetailBattery from "../../assets/svg/detailBattery.svg";



function serviceSlider() {
   const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
   return (
      <div className={Style.sliderBorder}>
      <Carousel
         swipeable={true}
         draggable={true}
         showDots={false}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlaySpeed={1000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
      >
         <div className={`${Style.detailCard} ${Style.active}`}>
            <img src={DetailCar} alt="carImg" />
            <div className={Style.detailCardText}>Car wash</div>
         </div>
         <div className={Style.detailCard}>
            <img src={DetailOil} alt="oilImg" />
            <div className={Style.detailCardText}>Oil</div>
         </div>
         <div className={Style.detailCard}>
            <img src={DetailBattery} alt="batteryImg" />
            <div className={Style.detailCardText}>Battery</div>
         </div>
      </Carousel>
      </div>
   )
}

export default serviceSlider;
