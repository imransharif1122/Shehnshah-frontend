
import Style from "./services.module.css";
import ServiceCards from "../../components/serviceCards/ServiceCards";
import {useHistory } from 'react-router-dom';
import Loader from  "../../assets/images/loader.jpg";
import { serviceProvider } from '../../api/service';
import React, { useEffect, useState } from 'react';
function Services() {
   const history = useHistory();
   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      serviceProvider().then(responce => {
         const listed=responce.Data.organizations
         setList(listed);
         setLoading(false);
   
       });
        
    }, [])

    const handleRoute = (object) =>{ 
      //  console.log(object.organizationServices);
      //  console.log(object.organizationServices);
      history.push({
         pathname: '/detail',
         state: { apiObject: object }
       })
    }


   return (
      <>
         <div className={Style.home}>
         <div className="topHeading">Service Providers</div>
         <div className={Style.cardMain}>
         { loading ? <img src={Loader} alt="profileImg"  className="loader" /> : null }

            {list.map(function(object, i){



        return (
        <>
         <div onClick={()=>{handleRoute(object)}} className={Style.serviceLink}>
        <ServiceCards obj={object} key={i} 
        />
         </div>
        </>
        )
})}
         </div>
      </div>
         
      </>
   )
}

export default Services
