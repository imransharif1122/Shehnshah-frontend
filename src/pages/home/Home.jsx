import React, { useEffect, useState } from 'react';
import Style from "./home.module.css";
import HomeCard from '../../components/homeCards/HomeCard';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { getServiceList } from '../../api/service';
import Loader from  "../../assets/images/loader.jpg";

import {MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';



function Home() {
   
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(true);

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };
  useEffect(() => {
   getServiceList().then(responce => {
      const listed=responce.Data;
      let newArray = listed.filter((item) => {
         if (typeof item.queue_id !== 'undefined') {
            return item.queue_id.title === "Car Wash";
          }
       });
      setList(newArray);
      setLoading(false);

    });
     
 }, [])
   return (
      <>
         <div className="topHeading">
            <div className={`d-flex justify-content-between align-items-center`}>
               <div>Home</div>
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                     value={selectedDate}
                     onChange={handleDateChange}
                  />
               </MuiPickersUtilsProvider>
            </div>
         </div>
         <div className={Style.homeSticky}>
            <div className={Style.homeStickyWrapper}>
               <div className={Style.leftText}>Q<sub>1</sub></div>
               <div className={Style.rightText}>Car wash</div>
            </div>
         </div>
         { loading ? <img src={Loader} alt="profileImg"  className={Style.loader} /> : null }
        
         {list.map(function(object, i){
        return (
        <>
        <HomeCard obj={object} key={i} 
        />
        </>
        )
})}            
      </>
   )
}

export default Home
