import React from 'react'
import Style from  "./navbar.module.css";
import {NavLink} from "react-router-dom";
import HomeSvg from "../../assets/svg/home.svg";
import HeartSvg from "../../assets/svg/heart.svg";
import BookingSvg from "../../assets/svg/booking.svg";
import MenuSvg from "../../assets/svg/menu.svg";

function Navbar() {
   return (
      <>
         <nav className={Style.navMenu}>
            <ul className={Style.navList}>
               <NavLink to="/home" className={Style.navLink} activeClassName={Style.navListActive}>
               <li className={Style.navListItem}>
                  <img src= {HomeSvg} alt="home" className={Style.navImg} /> <span className={Style.itemName}>Home</span>
               </li>
               </NavLink>
               <NavLink to="/favorites" className={Style.navLink} activeClassName={Style.navListActive}>
               <li className={Style.navListItem}>
                  <img src={HeartSvg} alt="heart" className={Style.navImg} /> <span className={Style.itemName}>Favorites</span>
               </li>
               </NavLink>
               <NavLink to="/booking" className={Style.navLink} activeClassName={Style.navListActive}>
               <li className={Style.navListItem}>
                  <img src={BookingSvg} alt="booking" className={Style.navImg} /> <span className={Style.itemName}>Booking</span>
               </li>
               </NavLink>
               <NavLink to="/menu" className={Style.navLink} activeClassName={Style.navListActive}>
               <li className={Style.navListItem}>
                  <img src={MenuSvg} alt="menu" className={Style.navImg} /> <span className={Style.itemName}>Menu</span>
               </li>
               </NavLink>
            </ul>
         </nav>
      </>
   )
}

export default Navbar;
