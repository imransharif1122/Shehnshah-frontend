import React, {useState} from 'react'
import Style from "./home.module.css";
import HomeCard from '../../components/homeCards/HomeCard';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';




function Home() {
   const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };
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
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
      </>
   )
}

export default Home
