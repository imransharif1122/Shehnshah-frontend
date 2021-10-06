import React from 'react';
import Style from "./verification.module.css";
import ReactCodeInput from 'react-verification-code-input';
import { Link } from "react-router-dom";
import VerImg from "../../assets/images/Group 4.png";
import BackImg from "../../assets/images/Back-arrow.png"



function Verification() {
    return (
        <div className={Style.customContainer}>
        <div className={`${Style.backImg} pl-3`}>
        <img src={BackImg} alt="back-arrow" />
    </div>
        <div className="wrapper">
            <div className={`${Style.verificationImg} text-center`}>
                <img src={VerImg} alt="verify-img"/>
            </div>
            <div className={`${Style.heading} pt-3`}>Enter Passcode</div>
            <div className={`${Style.subHeading} pt-2 text-center`}>OTP has been sent to your mobile <br /> number.Please enter Passcode</div>
            <ReactCodeInput fields={4} className={`d-flex justify-content-center mt-5 w-100`} />
            <Link to="/home">
            <div className={`text-center pt-5`}>
              <button className="btnBlack">Verify</button>
            </div>
            </Link>
            <div className={Style.headingSm}>if you don't receive a code! <Link className={Style.resend}>Resend</Link></div>
        </div>
        </div>
    )
}

export default Verification
