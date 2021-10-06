import React from 'react';
import Total from "../../assets/images/total.png";
import Style from "./serviceCards.module.css";
import "../CardRating"
import GreenHeart from "../../assets/svg/heartg.svg";
import CarWash from "../../assets/svg/car-wash.svg";
import OilChange from "../../assets/svg/oil-change.svg";
import Battery from "../../assets/svg/battery.svg";
import Direction from "../../assets/svg/direction.svg";
import CardRating from '../CardRating';

function ServiceCards() {
   return (
      <div className={Style.cardContainer}>
         <div className={Style.cardWrapper}>
         <div className={Style.topWrappper}>
            <div className={Style.topContent}>
               <img src={Total} alt="pumpImg" className={Style.cardImg} />
               <div className={Style.cardDetail}>
                  <div className={Style.cardHeading}>Total al safeer car wash pump</div>
                  <CardRating />
                  <div className={Style.location}>Sharjah al nahada road</div>
               </div>
               <img src={GreenHeart} alt="green-heart" className={Style.heartGreen} />
            </div>
            <div className={Style.bottomContent}>
               <div className={Style.leftBottomContent}>
                  <div className={Style.bottomWrapper}>
                     <img src={CarWash} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>Car Wash</span>
                  </div>
                  <div className={Style.bottomWrapper}>
                     <img src={OilChange} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>Oil Change</span>
                  </div>
                  <div className={Style.bottomWrapper}>
                     <img src={Battery} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>Battery</span>
                  </div>
               </div>
               <div className={Style.rightBottomContent}>
                  <div className={`${Style.bottomWrapper} ${Style.rightBottom}`}>
                     <img src={Direction} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>35km</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
   )
}

export default ServiceCards;
