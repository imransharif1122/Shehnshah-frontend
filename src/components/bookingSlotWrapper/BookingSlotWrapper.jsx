import React from 'react'
import Style from  "./bookingSlotWrapper.module.css";
import SlotOrange from "../../assets/svg/slotO.svg"
import {Link} from "react-router-dom"
import Button from "../../components/button/Button";

function BookingSlotWrapper() {
   return (
      <>
        <div className={Style.slotsBottomWrapper}>
            <div className={`d-flex align-items-center justify-content-around pb-3`}>
               <div className={Style.slotImgWrapper}>
                  <img src={SlotOrange} alt="orange-slot" className={Style.slotImg} />
                  <div className={Style.slotNumber}>01</div>
               </div>
               <div className={Style.time}>12:30pm</div>
               <div className={Style.slotsBtnWrapper}>
               <Link to="/confirmBooking">
               <Button label="Reserve" type="button" cssClass={Style.borderOrange} />

               </Link>
                  <div className={Style.btnTime}>SLA Time: 40</div>
               </div>
            </div>
         </div> 
      </>
   )
}

export default BookingSlotWrapper
