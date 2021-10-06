import React from 'react'
import Style from "./confirmBooking.module.css";
import "../../components/CardRating"
import { Link } from "react-router-dom";
import Cover from "../../assets/images/cover.png";
import Profile from "../../assets/images/profile.png";
import ArrowWhite from "../../assets/svg/arrow-white.svg";
import CardRating from '../../components/CardRating';
import CarWash from "../../assets/svg/detailCar.svg"
import AddressIcon from '../../assets/svg/addressIcon.svg';
import VehicleIcon from '../../assets/svg/vehicleIcon.svg';
import VinIcon from '../../assets/svg/vinIcon.svg';
import Dubai from  "../../assets/svg/dubai.svg" 

function ServiceDetail() {
   return (
      <>
         <div className="fullContainer">
            <div className={Style.profileWrapper}>
               <div className={Style.coverImg}>
                  <img src={Cover} alt="coverImg" className={Style.coverPhoto} />
               </div>
               <div className={Style.profileImg}>
                  <img src={Profile} alt="profileImg" className={Style.profilePhoto} />
                  <div className={Style.detailDesc}>
                     <div className={Style.detailHeading}>Total Al safeer car wash</div>
                     <CardRating />
                  </div>
               </div>
               <div className={Style.backBtn}>
               <Link to="/slots">
               <img src={ArrowWhite} alt="backBtn" className={Style.detailBackBtn} />
               </Link>
                  <span className={Style.backBtnText}>Confirm Booking</span>
               </div>
            </div>
            <div className={Style.serviceText}>
               Select Service
            </div>
            <div className={Style.confirmBookingCardWrapper}>
               <div className={Style.confirmBookingCard}>
                  <img src={CarWash} alt="" />
                  <div className={Style.confirmBookingCardText}>Car wash</div>
               </div>
               <div className={Style.confirmBookingCardRightText}>Normal Body wash</div>
            </div>
            <div className={Style.timingWrapper}>
               <div className={Style.date}>
                  <span className={Style.timingWrapperLabel}>Date: </span><span className={Style.timingWrapperText}>10,May,2021</span>
               </div>
               <div className={Style.border}></div>
               <div className={Style.time}>
                  <span className={Style.timingWrapperLabel}>Time: </span><span className={Style.timingWrapperText}>5:30PM</span>
               </div>
            </div>
            <div className={Style.serviceBottom}>
               <div className={Style.numberPlate}>
                  <div className={Style.numberPlateLeft}>C</div>
                  <img src={Dubai} alt="dubai" />
                  <div className={Style.numberPlateLeft}>19001</div>

               </div>
               <div className={Style.serviceBottomDetail}>
                  <img src={VehicleIcon} alt="addressImg" className={Style.serviceIcon} />
                  <div><span className={Style.bottomLabel}>Vehicle Model: </span>2019</div>
               </div>
               <div className={Style.serviceBottomDetail}>
                  <img src={VinIcon} alt="addressImg" className={Style.serviceIcon} />
                  <div><span className={Style.bottomLabel}>VIN Number: </span>1HGBH41JXMN109186</div>
               </div>
               <div className={Style.serviceBottomDetail}>
                  <img src={AddressIcon} alt="addressImg" className={Style.serviceIcon} />
                  <div><span className={Style.bottomLabel}>Address: </span>Behind al safeer all al-wahadaroad Sharjah- United Arab Emirates</div>
               </div>
            </div>
            <Link to="/slots">
               <div className={`text-center pt-5 pb-5`}>
                  <button className="btnBlack">Confirm Booking</button>
               </div>
            </Link>
            
         </div>
      </>
   )
}

export default ServiceDetail;
