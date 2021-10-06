import React from 'react'
import "./serviceDetail.css";
import "../../components/CardRating"
import { Link } from "react-router-dom";
import Cover from "../../assets/images/cover.png";
import Profile from "../../assets/images/profile.png";
import ArrowWhite from "../../assets/svg/arrow-white.svg";
import CardRating from '../../components/CardRating';
import AddressIcon from '../../assets/svg/addressIcon.svg';
import WebsiteIcon from '../../assets/svg/websiteIcon.svg';
import PhoneIcon from '../../assets/svg/phoneIcon.svg';
import ServiceSlider from '../../components/serviceSlider/serviceSlider';

function ServiceDetail() {
   return (
      <>
         <div className="fullContainer">
            <div className="profileWrapper">
               <div className="coverImg">
                  <img src={Cover} alt="coverImg" className="coverPhoto" />
               </div>
               <div className="profileImg">
                  <img src={Profile} alt="profileImg" className="profilePhoto" />
                  <div className="detailDesc">
                     <div className="detailHeading">Total Al safeer car wash</div>
                     <CardRating />
                  </div>
               </div>
               <div className="backBtn">
                  <img src={ArrowWhite} alt="backBtn" className="detailBackBtn" />
               </div>
            </div>
            <div className="serviceText">
               Select Service
            </div>
            <ServiceSlider  />
            <div className="serviceBottom">
               <div className="serviceBottomDetail">
                  <img src={AddressIcon} alt="addressImg" className="serviceIcon" />
                  <div><span className="bottomLabel">Address: </span>Behind al safeer all al-wahadaroad Sharjah- United Arab Emirates</div>
               </div>
               <div className="serviceBottomDetail">
                  <img src={WebsiteIcon} alt="addressImg" className="serviceIcon" />
                  <div><span className="bottomLabel">Website: </span>www.sharjahcarwash.com</div>
               </div>
               <div className="serviceBottomDetail">
                  <img src={PhoneIcon} alt="addressImg" className="serviceIcon" />
                  <div><span className="bottomLabel">Phone: </span>+97 123 4567</div>
               </div>
            </div>
            <Link to="/slots">
            <div className="text-center pt-5 pb-5">
              <button className="btnBlack">See Booking</button>
            </div>
            </Link>
            
         </div>
      </>
   )
}

export default ServiceDetail;
