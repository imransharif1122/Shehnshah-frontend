import React from 'react';
import Style from "./homeCard.module.css";
import ProfilePic from "../../assets/images/profilePic.png";
import PieGraph from  "../../assets/svg/pieGraph.svg";
import moment from 'moment'

function HomeCard(prop) {
   // const dateString = '2020-09-11T04:30:00.672Z'
   
   const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }

    

    const formatTime=(dateString)=>{
      const local = moment.utc(dateString).local().format("hh:mm A");
      return local;
    }

   
   let userData=prop.obj.user_id;
   let vehicleData=userData?userData.vehicles[0]:""
   return (
      <>
         <div className={Style.mainCardWrapper}>
            <div className={Style.cardWrapper}>
               <div className={`d-flex`}>
                  <div className={Style.leftTopCard}>
                     <img src={ProfilePic} alt="profileImg" className={Style.profile} />
                     <div className={`d-flex flex-column pl-2`}>
                        <div className={Style.userName}>{userData?userData.username:""}</div>
                        <div className={Style.userEmail}>{userData?userData.email:""}</div>
                     </div>
                  </div>
                  <div className={Style.rightTopCard}>
                     <img src={PieGraph} alt="" className={Style.rightTopCardImg} />
                  </div>
               </div>
               <div className={Style.middleCard}>
                  <div className={Style.middleLeft}>
                     <div className={Style.middleLabel}>Reg Number:</div>
                     <div className={Style.middleText}>{userData?userData.vehicles[0].registration_number:""}</div>
                     <div className={`${Style.middleLabel} pt-2`}>Vehicle Model:</div>
                     
                     <div className={Style.middleText}>{vehicleData.year?vehicleData.year.year:""} </div>
                  </div>
                  <div className={Style.middleBorder}></div>
                  <div className={Style.middleRight}>
                     <div className={Style.middleLabel}>Time:</div>
                     <div className={Style.middleText}>{formatTime(prop.obj.time_from)} to {formatTime(prop.obj.time_to)}</div>
                     <div className={`${Style.middleLabel} pt-2`}>Phone:</div>
                     <div className={Style.middleText}>{userData?userData.phone:""}</div>
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
