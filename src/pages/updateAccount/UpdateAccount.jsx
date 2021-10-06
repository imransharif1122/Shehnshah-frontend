import React from 'react'
import Style from "./updateAccount.module.css"
import ArrowWhite from "../../assets/svg/leftArrow.svg"
import ProfilePic from "../../assets/images/profilePic.png"
import EditIcon from "../../assets/svg/pencil.svg"
import { Link } from 'react-router-dom'
import RightArrow from "../../assets/svg/rightArrow.svg";

function UpdateAccount() {

   return (
      <>
         <div className={Style.topWrapper}>
            <div className={Style.topWrapperText}>Update Account</div>
            <Link to="/menu">
            <img src={ArrowWhite} alt="" />
            </Link>
         </div>
         <div className={Style.imgWrapper}>
            <div className={Style.profileImg}>
               <img src={ProfilePic} alt="" />
            </div>
            <div className={Style.editProfileImg}>
               <img src={EditIcon} alt="" />
            </div>
         </div>
         <div className={Style.formWrapper}>
            <div className={Style.formDiv}>
               <div className={Style.formLabel}>First Name</div>
               <Link to="/updateName" className={Style.inputLink}>
                  <div className={Style.formInput}>
                     <div className={Style.inputText}>Zaka</div>
                     <img src={RightArrow} alt="" />
                  </div>
               </Link>
            </div>
            <div className={Style.formDiv}>
               <div className={Style.formLabel}>Last Name</div>
               <Link to="/updateName" className={Style.inputLink}>
                  <div className={Style.formInput}>
                     <div className={Style.inputText}>Shah</div>
                     <img src={RightArrow} alt="" />
                  </div>
               </Link>
            </div>
            <div className={Style.formDiv}>
               <div className={Style.formLabel}>Mobile number</div>
               <Link to="/updateNumber" className={Style.inputLink}>
                  <div className={Style.formInput}>
                     <div className={Style.inputText}>+971 50 123 4567</div>
                     <img src={RightArrow} alt="" />
                  </div>
               </Link>
            </div>
            <div className={Style.formDiv}>
               <div className={Style.formLabel}>Email</div>
               <Link to="/updateEmail" className={Style.inputLink}>
                  <div className={Style.formInput}>
                     <div className={Style.inputText}>zakashah@gmail.com</div>
                     <img src={RightArrow} alt="" />
                  </div>
               </Link>
            </div>
            <div className={Style.formDiv}>
               <div className={Style.formLabel}>Change Password</div>
               <Link to="/updatePassword" className={Style.inputLink}>
                  <div className={Style.formInput}>
                     <div className={Style.inputText}></div>
                     <img src={RightArrow} alt="" />
                  </div>
               </Link>
            </div>
         </div>
         
      </>
   )
}

export default UpdateAccount
