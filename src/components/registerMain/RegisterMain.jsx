import React from 'react'
import Style from "./registerMain.module.css";
import { Link } from 'react-router-dom'
import OrangeSlot from "../../assets/svg/slotO.svg";
import Button from "../../components/button/Button";

function RegisterMain() {
   return (
      <>
        <div className={Style.bookingDiv}>
               <div className={Style.slotImgWrapper}>
                  <img src={OrangeSlot} alt="orange" className={Style.bookingImg} />
                  <div className={Style.slotNumber}>01</div>
               </div>
               <div className={Style.time}>9:30Am ..... 10:00Am</div>
               <Link to="/register">
                  <Button label="Register" type="button" cssClass={Style.borderOrange} />
               </Link>
            </div> 
      </>
   )
}

export default RegisterMain
