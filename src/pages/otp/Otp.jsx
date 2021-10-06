import React, { useState } from 'react';
import Style from "./otp.module.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from "react-router-dom";
import OtpImg from "../../assets/images/otp.png"


function Otp() {
    const [value, setValue] = useState('');
    return (
        <div className={Style.customContainer}>
            <div className={Style.wrapper}>
            <div className={`${Style.otpImg} pt-2`} >
                <img src={OtpImg} alt="otp-img" />
            </div>
                <div className={`${Style.heading} pt-3`}>Verify Your Number</div>
                <div className={`${Style.subHeading} pt-2 text-center`}>Please enter your mobile number to <br /> receive one Time Password (OTP)</div>
            </div>
            <div className={`${Style.headingSm} text-left px-4`}>Mobile number</div>
            <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="AE"
                value={value}
                onChange={setValue} 
            />
            <Link to="/verification">
            <div className={`text-center pt-5`}>
              <button className="btnBlack">Send</button>
            </div>
            </Link>
        </div>

    )
}

export default Otp;
