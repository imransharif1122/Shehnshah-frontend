import {React, useState} from 'react';
import "./serviceDetail.css";
import "../../components/CardRating"
import { Link,useHistory } from "react-router-dom";
import Cover from "../../assets/images/cover.png";
import Profile from "../../assets/images/profile.png";
import ArrowWhite from "../../assets/svg/arrow-white.svg";
import AddressIcon from '../../assets/svg/addressIcon.svg';
import WebsiteIcon from '../../assets/svg/websiteIcon.svg';
import PhoneIcon from '../../assets/svg/phoneIcon.svg';
import Battery from "../../assets/svg/detailBattery.svg";
import OilChange from "../../assets/svg/detailOil.svg";
import CarWash from "../../assets/svg/detailCar.svg";
import Style from "../../components/serviceCards/serviceCards.module.css";
import {Modal} from 'react-bootstrap'
import Select from "react-select"



function ServiceDetail() {
   const [list, setList] = useState([]);

   const history = useHistory();
   const apiObject = history.location.state.apiObject;

   const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
   

   const loadServices = () =>{
      const result = [];

      apiObject.organizationServices.forEach(task=>{
         const index = result.findIndex(r=>r.service.title === task.service.title);
         if(index === -1){
            result.push(task);
         }
      })

      return result;
   }

   function Options({ options }) {
      console.log('New',options[0].option);
      return (
          options.map(option => 
                      <option key={option.id} value={option.value}>                                   
                      {option.option.value}
                      </option>)
                     );
  }

   const handleService = (value) =>{
      let friends = apiObject.organizationServices.filter( function (object) {
         return object.service.title.toString() === value
       });
       setList(friends);
       console.log(friends);
       handleShow();
    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
  function renderImage(value)
  {
      if (value.service.title.toString()=='Oil')
      {
        return <div className="detailCard" onClick={()=>{handleService(value.service.title)}}><img src={OilChange} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>{value.service.title}</span></div>
      }
  
      if (value.service.title.toString()=='Car Wash')
      {
        return <div className="detailCard" onClick={()=>{handleService(value.service.title)}}><img src={CarWash} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>{value.service.title}</span></div>
      }
  
      if (value.service.title.toString()=='Battery')
      {
        return <div className="detailCard" onClick={()=>{handleService(value.service.title)}}><img src={Battery} className={Style.bottomWrapperImg} alt="" /> <span className={Style.itemName}>{value.service.title}</span></div>
      }
      
  }
   // console.log(loadServices());
  
   // const { movieId } = useParams();
   
   return (
      <>
         <div className="fullContainer">
            <div className="profileWrapper">
               <div className="coverImg">
                  <img src={Cover} alt="coverImg" className="coverPhoto" />
               </div>
               <div className="profileImg">
                  <img src={Profile} alt="profileImg" className="profilePhoto" />
                  <div className="detailDesc">
                     <div className="detailHeading">{apiObject.business_title}</div>
                     <div className="detailaddress">{apiObject.phone}</div>
                     <div className="detailaddress">{apiObject.address}</div>
                     {/* <CardRating /> */}
                  </div>
               </div>
               <div className="backBtn">
                  <img src={ArrowWhite} alt="backBtn" className="detailBackBtn" />
               </div>
            </div>
            <div className="serviceText">
               Select Service
            </div>
            <div className="parentCard">
            {loadServices().map(task=>{

            return  renderImage(task)

            })}
            </div>

               <Modal show={show} onHide={handleClose} size="sm" centered>
               <Modal.Header closeButton>
               </Modal.Header>
               <Modal.Body>
  
               <Select
                           options={list} 
                           isSearchable={true}
                           placeholder="Select your vehicle"
                           menuColor='black'
                        />
               </Modal.Body>
               </Modal>

            <div className="serviceBottom">
               <div className="serviceBottomDetail">
                  <img src={AddressIcon} alt="addressImg" className="serviceIcon" />
                  <div><span className="bottomLabel">Address: </span>{apiObject.address}</div>
               </div>
               <div className="serviceBottomDetail">
                  <img src={WebsiteIcon} alt="addressImg" className="serviceIcon" />
                  <div><span className="bottomLabel">Website: </span>{apiObject.website}</div>
               </div>
               <div className="serviceBottomDetail">
                  <img src={PhoneIcon} alt="addressImg" className="serviceIcon" />
                  <div><span className="bottomLabel">Phone: </span>{apiObject.phone}</div>
               </div>
            </div>
            <Link to="/slots">
            <div className="text-center pt-5 pb-5">
              <button className="btnBlack">See Booking</button>
            </div>
            </Link>
            
         </div>
      </>
   )
}

export default ServiceDetail;
