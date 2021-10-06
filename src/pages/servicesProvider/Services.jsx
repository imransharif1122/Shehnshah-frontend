import React from 'react';
import Style from "./services.module.css";
import ServiceCards from "../../components/serviceCards/ServiceCards";
import { Link } from 'react-router-dom';

function Services() {
   return (
      <>
         <div className={Style.home}>
         <div className="topHeading">Service Providers</div>
         <div className={Style.cardMain}>
            <Link to="/detail" className={Style.serviceLink}>
               <ServiceCards />
            </Link>
            <ServiceCards />
            <ServiceCards />
         </div>
      </div>
         
      </>
   )
}

export default Services
