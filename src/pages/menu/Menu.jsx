import React from 'react'
import Style from "./menu.module.css";
import LeftArrow from "../../assets/svg/leftArrow.svg"
import UserProfile from "../../assets/images/userProfile.png"
import BellIcon from "../../assets/svg/bell.svg";
import BadgeIcon from "../../assets/svg/badge.svg";
import NotesIcon from "../../assets/svg/notes.svg";
import CarIcon from "../../assets/svg/car.svg";
import BallanceIcon from "../../assets/svg/balance.svg";
import ConditionIcon from "../../assets/svg/condition.svg";
import SettingIcon from "../../assets/svg/setting.svg";
import LogoutIcon from "../../assets/svg/logout.svg";
import BitmapIcon from "../../assets/svg/bitmap.svg";
import {Link} from "react-router-dom";

function Menu() {
   return (
      <>
        <div className={Style.topWrapper}>
           <div className={Style.topMenu}>
              <Link to="/updateAccount">
               <div className={Style.topMenuLeft}>
                  <img src={UserProfile} alt="userProfile" className={Style.userProfile} />
                  <span className={Style.userName}>Zaka Shah</span>
               </div>
              </Link>
              <div className={Style.topMenuRight}>
                 <img src={LeftArrow} alt="leftArrow" />
              </div>
           </div>
           <div className={Style.middleMenu}>
              <div className={Style.leftMiddleMenu}>
                 <div className={Style.leftText}>Notifications</div>
              </div>
              <div className={Style.rightMiddleMenu}>
                 <img src={BellIcon} alt="bellIcon" />
              </div>
           </div>
           <div className={Style.bottomMenu}>
              <div className={Style.bottomText}>General</div>
              <div className={Style.bottomText}>Tutorial</div>
              <div className={Style.bottomText}>Contact us</div>
           </div>
        </div> 
        <div className={Style.favorites}>
           <div className={Style.leftFavorite}>
              <div className={Style.heading}>Favorites</div>
              <div className={Style.description}>Manage your favorites, set your home and work location.Your favorite locationand places.</div>
           </div>
           <div className={Style.rightFavorie}>
              <img src={BadgeIcon} alt="icon" />
           </div>
        </div>
        <div className={Style.favorites}>
           <div className={Style.leftFavorite}>
              <div className={Style.heading}>Personal</div>
              <div className={Style.description}>Manage your personal info, preferences and decisions.Add your personal loram keep track of your serviceshistory, coupons and packages.
              </div>
           </div>
           <div className={Style.rightFavorie}>
              <img src={NotesIcon} alt="icon" />
           </div>
        </div>
        <div className={Style.vehicle}> 
           <img src={CarIcon} alt="car" />
           <div className={Style.rightVehicle}>
              <div className={Style.textVehicle}>My Vehicle</div>
              <img src={BitmapIcon} alt="bitmap" /><span className={Style.imgText}>Toyota camry</span>
              <div className={Style.numberPlate}>C19001 Sharjah</div>
           </div>
        </div>
        <div className={Style.Ballance}>
            <div className={`d-flex pb-3`}>
               <img src={BallanceIcon} alt="balance" />
               <div className={Style.textBallance}>Legal</div>
            </div>
            <div className={`d-flex pb-3`}>
               <img src={ConditionIcon} alt="notes" />
               <div className={Style.textBallance}>Terms & conditions</div>
            </div>
            <div className={`d-flex pb-3`}>
               <img src={SettingIcon} alt="setting" />
               <div className={Style.textBallance}>Settings</div>
            </div>
        </div>
        <div className={Style.logout}>
           <img src={LogoutIcon} alt="logout" />
           <div className={Style.rightVehicle}>
              <div className={Style.textVehicle}>Logout</div>
           </div>
        </div>
      </>
   )
}

export default Menu
