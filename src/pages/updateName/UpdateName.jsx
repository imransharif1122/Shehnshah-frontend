import React from 'react'
import Style from "./updateName.module.css"
import BlackArrow from "../../assets/svg/leftArrowBlack.svg"
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

function UpdateName() {
   return (
      <>
        <div className={Style.topWrapper}>
            <div className={`d-flex align-items-center justify-content-between pb-5`}>
               <div className={Style.topWrapperText}>
                  Update Name
               </div>
               <Link to="/updateAccount"><img src={BlackArrow} alt="" /></Link>
            </div>
            <div className={Style.bottomText}>
               Your name makes<br /> service providers to identify you
            </div>
        </div> 
        <div className={Style.formWrapper}>
            <div className={`pt-5 ${Style.formDiv}`}>
               <label htmlFor="fname">First Name</label>
               <input type="text" name="fname" id="fname" autoComplete="off" placeholder="Zaka" />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="lname">Last Name</label>
               <input type="text" name="lname" id="lname" autoComplete="off" placeholder="Shah" />
            </div>
            <div className={`text-center mt-4 mb-3`}>
               <Button label="Update" type="submit" cssClass={Style.btnBlack} />
         </div>
        </div>
      </>
   )
}

export default UpdateName
