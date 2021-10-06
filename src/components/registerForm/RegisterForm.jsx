import React from 'react'
import Style from "./registerForm.module.css";
import BackArrow from "../../assets/svg/blackArrow.svg"
import Select from "react-select"
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' },
 ];


function RegisterForm() {

   return (
      <>
         <div className={Style.stickyHeading}>
            <Link to="/booking">
               <img src={BackArrow} alt="backArrow" />
            </Link>
            <div className={Style.text}>Register</div>
         </div>
         <form className={Style.formWrapper}>
            <div className={Style.formDiv}>
               <label htmlFor="fname">First name</label>
               <input type="text" name="fname" id="fname" placeholder="Enter your first name" autoComplete="off" />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="lname">Last name</label>
               <input type="text" name="lname" id="lname" placeholder="Enter your last name" autoComplete="off" />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="number">Phone number</label>
               <input type="number" name="number" id="number" placeholder="Enter your phone number" autoComplete="off" />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="vehicle">Vehicle</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder="Select your vehicle"
                  menuColor='black'
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="regNumber">Registeration</label>
               <input type="number" name="regNumber" id="regNumber" placeholder="Enter your registeration" autoComplete="off" />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="type">Type</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder="Select type"
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="make">Make</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder="Select making"
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="model">Model</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder="Select model"
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="year">Year</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder="Select year"
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="colour">Colour</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder="Select colour"
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="vin">VIN</label>
               <input type="text" name="vin" id="vin" placeholder="Enter VIN number" autoComplete="off" />
            </div>
         </form>
         <div className={`text-center mb-3`}>
            <Button label="Register" type="submit" cssClass={Style.btnBlack} />
         </div>

         
      </>
   )
}

export default RegisterForm
