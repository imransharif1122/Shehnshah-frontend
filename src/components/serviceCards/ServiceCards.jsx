import React, { useEffect, useState } from 'react';
import Total from "../../assets/images/total.png";
import Style from "./serviceCards.module.css";
import "../CardRating"
import GreenHeart from "../../assets/svg/heartg.svg";
import CarWash from "../../assets/svg/car-wash.svg";
import OilChange from "../../assets/svg/oil-change.svg";
import Battery from "../../assets/svg/battery.svg";
import Direction from "../../assets/svg/direction.svg";
import CardRating from '../CardRating';

function ServiceCards(prop) {

   // console.log(prop.obj.organizationServices);

   

   
   const [lat, setLat] = useState([]);
   const [lng, setLng] = useState([]);

   function calcCrow(lat1, lon1, lat2, lon2) {
      var R = 6371 // km
      var dLat = toRad(lat2 - lat1)
      var dLon = toRad(lon2 - lon1)
      var lat1 = toRad(lat1)
      var lat2 = toRad(lat2)
  
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      var d = R * c
      // console.log(d);
      return d.toFixed(1)
  }
  
  // Converts numeric degrees to radians
  function toRad(Value) {
      return Value * Math.PI / 180
  }

  function renderImage(value)
{
    if (value.service.title.toString()=='Oil')
    {
      return <div className={Style.bottomWrapper}><img src={OilChange} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>{value.service.title}</span></div>
    }

    if (value.service.title.toString()=='Car Wash')
    {
      return <div className={Style.bottomWrapper}><img src={CarWash} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>{value.service.title}</span></div>
    }

    if (value.service.title.toString()=='Battery')
    {
      return <div className={Style.bottomWrapper}><img src={Battery} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>{value.service.title}</span></div>
    }
    
}
  
   useEffect(() => {
   
       navigator.geolocation.getCurrentPosition(function(position) {
         setLat( position.coords.latitude);
         setLng( position.coords.longitude);
         //  calcCrow(position.coords.latitude,position.coords.longitude,'30.8138','73.4534');
        
       });
        
    }, [])

   const loadServices = () =>{
      const result = [];

      prop.obj.organizationServices.forEach(task=>{
         const index = result.findIndex(r=>r.service.title === task.service.title);
         if(index === -1){
            result.push(task);
         }
      })

      return result;
   }


   return (
      <div className={Style.cardContainer}>
         <div className={Style.cardWrapper}>
         <div className={Style.topWrappper}>
            <div className={Style.topContent}>
               <img src={Total} alt="pumpImg" className={Style.cardImg} />
               <div className={Style.cardDetail}>
                  <div className={Style.cardHeading}>{prop.obj.business_title}</div>
                  {/* <CardRating /> */}
                  <div className={Style.phone}>Phone: {prop.obj.phone}</div>
                  <div className={Style.location}>{prop.obj.address}</div>
               </div>
               <img src={GreenHeart} alt="green-heart" className={Style.heartGreen} />
            </div>
            <div className={Style.bottomContent}>
               <div className={Style.leftBottomContent}>

               {loadServices().map(task=>{

                  return  renderImage(task)

      })}
         
               </div>
               <div className={Style.rightBottomContent}>
                  <div className={`${Style.bottomWrapper} ${Style.rightBottom}`}>
                     <img src={Direction} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>{calcCrow(lat,lng,prop.obj.lat,prop.obj.long)} KM</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
   )
}

export default ServiceCards;
