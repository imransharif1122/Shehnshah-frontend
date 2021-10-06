import React from 'react';
import Style from "./favorites.module.css";
import FavoriteCards from "../../components/favoriteCards/FavoriteCards";
import Hamburger from "../../assets/svg/hamBurger.svg"


function Services() {
   return (
      <>
         <div className={Style.home}>
         <div className={Style.topHeading}><img src={Hamburger} alt="hamburger" className={`mr-3`} />Favourites</div>
         <div className={Style.cardMain}>
            <FavoriteCards />
            <FavoriteCards />
            <FavoriteCards />
            <FavoriteCards />
            <FavoriteCards />
            <FavoriteCards />
         </div>
      </div>
         
      </>
   )
}

export default Services
