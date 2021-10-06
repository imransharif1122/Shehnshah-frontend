import React from 'react';
import Total from "../../assets/images/total.png";
import Style from "./favoriteCards.module.css";
import CarWash from "../../assets/svg/car-wash.svg";
import OilChange from "../../assets/svg/oil-change.svg";
import Battery from "../../assets/svg/battery.svg";
import Direction from "../../assets/svg/direction.svg";

function FavoriteCards() {
   return (
      <div className={Style.cardContainer}>
         <div className={Style.cardWrapper}>
         <div className={Style.topWrappper}>
            <div className={Style.topContent}>
               <img src={Total} alt="pumpImg" className={Style.cardImg} />
               <div className={Style.cardDetail}>
                  <div className={Style.cardHeading}>Total al safeer car wash pump</div>
                  <div className={Style.cardLabel}>Phone: <span>+971 23 4567</span></div>
                  <div className={Style.location}>Sharjah al nahada road</div>
               </div>
               <img src={Direction} alt="direction" className={Style.heartGreen} />
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
                     See Booking
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
   )
}

export default FavoriteCards;
