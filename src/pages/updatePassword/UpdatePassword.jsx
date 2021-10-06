import React from 'react'
import Style from "./updatePassword.module.css"
import {Link} from "react-router-dom"
import BlackArrow from "../../assets/svg/leftArrowBlack.svg"
import Button from '../../components/button/Button'


function UpdatePassword() {
   return (
      <>
         <div className={Style.topWrapper}>
            <div className={`d-flex align-items-center justify-content-between pb-5`}>
               <div className={Style.topWrapperText}>
                  Update mobile number
               </div>
               <Link to="/updateAccount"><img src={BlackArrow} alt="" /></Link>
            </div>
            <div className={Style.bottomText}>
               Secure passwords are at least<br /> 8 characters Long and include numbers
            </div>
        </div>
        <div className={Style.formWrapper}>
            <div className={`pt-5 ${Style.formDiv}`}>
               <label htmlFor="password">Password</label>
               <input type="text" placeholder="Enter new password" name="password" id="password" autoComplete="off" value="" />
            </div>
            <div className={`text-center mt-4 mb-3`}>
               <Button label="Update" type="submit" cssClass={Style.btnBlack} />
         </div>
        </div>
      </>
   )
}

export default UpdatePassword
