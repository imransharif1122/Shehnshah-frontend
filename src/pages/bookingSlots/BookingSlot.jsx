import React from 'react'
import Style from "./bookingSlot.module.css"
import BlackArrow from "../../assets/svg/blackArrow.svg"
import Calendar from "../../assets/svg/calendarIcon.svg";
import BookingSlotWrapper from '../../components/bookingSlotWrapper/BookingSlotWrapper';



function BookingSlot() {
   return (
      <div  className={Style.fullContainer}>
         <div className={Style.slotsTopWrapper}>
            <div className={`d-flex justify-content-between align-items-center`}>
               <img src={BlackArrow} alt="arrow-white" />
               <div className={Style.slotsTopText}>Available Slots</div>
               <img src={Calendar} alt="calendarImg" />
            </div>
         </div>
         <div className={Style.slotsDate}>
            <div className={Style.slotsDateText}>
               <span className={Style.today}>Today</span>
               <span className={Style.date}>May, 10, 2021</span>
            </div>
         </div>
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         <BookingSlotWrapper />
         
      </div>
   )
}

export default BookingSlot
