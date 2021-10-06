import React, {useState} from 'react'
import Style from "./updateNumber.module.css"
import {Link} from "react-router-dom"
import BlackArrow from "../../assets/svg/leftArrowBlack.svg"
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Button from '../../components/button/Button'


function UpdateNumber() {
   const [value, setValue] = useState('');
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
               We will send a codeto your<br /> mobile Number to verify your account
            </div>
        </div>
        <div className={Style.formWrapper}>
            <div className={`pt-5 ${Style.formDiv}`}>
               <label htmlFor="fname">First Name</label>
               <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="AE"
                value={value}
                onChange={setValue} 
            />
            </div>
            <div className={`text-center mt-4 mb-3`}>
               <Button label="Update" type="submit" cssClass={Style.btnBlack} />
         </div>
        </div>
        
      </>
   )
}

export default UpdateNumber
