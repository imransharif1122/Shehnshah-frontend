import React from 'react';
import ReactStars from "react-rating-stars-component";
import Style from "./serviceCards/serviceCards.module.css"

function CardRating() {
   const ratingChanged = (newRating) => {
      console.log(newRating);
    };
   return (
      <>
         <div className={Style.cardRating}>
            <div className="rating pr-3">4.1</div>
            <ReactStars
               count={5}
               onChange={ratingChanged}
               size={24}
               value={4}
               edit={false}
               classNames="ratingStars"
               activeColor="#ffd700"
            />
            <div className="rating pl-3">(170)</div>
         </div>
      </>
   )
}

export default CardRating
