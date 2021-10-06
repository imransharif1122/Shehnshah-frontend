import React from 'react'
import Style from "./updateEmail.module.css"
import BlackArrow from "../../assets/svg/leftArrowBlack.svg"
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

function UpdateName() {
   return (
      <>
        <div className={Style.topWrapper}>
            <div className={`d-flex align-items-center justify-content-between pb-5`}>
               <div className={Style.topWrapperText}>
                  Update Email
               </div>
               <Link to="updateAccount"><img src={BlackArrow} alt="" /></Link>
            </div>
            <div className={Style.bottomText}>
               We will send you email to<br /> your email address to verify your email
            </div>
        </div> 
        <div className={Style.formWrapper}>
            <div className={Style.formDiv}>
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id="email" autoComplete="off" placeholder="zakashah@gmail.com" />
            </div>
            <div className={`text-center mt-4 mb-3`}>
               <Button label="Update" type="submit" cssClass={Style.btnBlack} />
         </div>
        </div>
      </>
   )
}

export default UpdateName
