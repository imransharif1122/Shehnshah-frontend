import React from 'react'
import Style from "./booking.module.css";
import CalendarIcon from "../../assets/svg/calendarIcon.svg";
import DownArrow from "../../assets/svg/downArrow.svg";
import RegisterMain from '../../components/registerMain/RegisterMain';

function Booking() {
   return (
      <>
         <div className="topHeading">
            <div className={`d-flex justify-content-between align-items-center`}>
               <div>Walk in Booking</div>
               <img src={CalendarIcon} alt="calendarIcon" />
            </div>
         </div>
         <div className={Style.carSticky}>
            <div className={Style.bookingStickyWrapper}>
               <div className={Style.leftText}>Car Wash</div>
               <div className={Style.date}>Sep,25,2021<img src={DownArrow} alt="arrowImg" className="ml-3" /></div>
            </div>
         </div>
         <RegisterMain />
         <RegisterMain />
         <RegisterMain />
         <div className={Style.oilSticky}>
            <div className={Style.bookingStickyWrapper}>
               <div className={Style.leftText}>Oil Change</div>
               <div className={Style.date}>Sep,25,2021<img src={DownArrow} alt="arrowImg" className="ml-3" /></div>
            </div>
         </div>
         <RegisterMain />
         <RegisterMain />
         <RegisterMain />
         <RegisterMain />
         <RegisterMain />
         <RegisterMain />
      </>
   )
}

export default Booking
