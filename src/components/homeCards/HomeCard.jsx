import React from 'react';
import Style from "./homeCard.module.css";
import ProfilePic from "../../assets/images/profilePic.png";
import PieGraph from  "../../assets/svg/pieGraph.svg"

function HomeCard() {
   return (
      <>
         <div className={Style.mainCardWrapper}>
            <div className={Style.cardWrapper}>
               <div className={`d-flex`}>
                  <div className={Style.leftTopCard}>
                     <img src={ProfilePic} alt="profileImg" className={Style.profile} />
                     <div className={`d-flex flex-column pl-2`}>
                        <div className={Style.userName}>Zaka Shah</div>
                        <div className={Style.userEmail}>zakashah@gmail.com</div>
                     </div>
                  </div>
                  <div className={Style.rightTopCard}>
                     <img src={PieGraph} alt="" className={Style.rightTopCardImg} />
                  </div>
               </div>
               <div className={Style.middleCard}>
                  <div className={Style.middleLeft}>
                     <div className={Style.middleLabel}>Reg Number:</div>
                     <div className={Style.middleText}>C - 19001</div>
                     <div className={`${Style.middleLabel} pt-2`}>Vehicle Model:</div>
                     <div className={Style.middleText}>2019</div>
                  </div>
                  <div className={Style.middleBorder}></div>
                  <div className={Style.middleRight}>
                     <div className={Style.middleLabel}>Time:</div>
                     <div className={Style.middleText}>09:30Am to 10:00Am</div>
                     <div className={`${Style.middleLabel} pt-2`}>Phone:</div>
                     <div className={Style.middleText}>+97 123 4567</div>
                  </div>
               </div>
               <div className={Style.bottomCard}>
                  <div className={Style.leftBottom}>
                     <div className={Style.leftBottomLabel}>Status</div>
                     <div>Booked</div>
                  </div>
                  <div className={Style.rightBottom}>
                     <div className={Style.btnCancel}>Cancel</div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default HomeCard
