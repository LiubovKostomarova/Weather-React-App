import React, { useState } from 'react';
import moment from 'moment';
import WeatherMinMax from './Weather';
import Chart from './Chart';
import ForecastFetch from './ForecastFetch';
import { BiMenu } from "react-icons/bi";
import { CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';


const Sidebar = () => {

  let dateToday = moment().format("Do MMM YYYY");

  
  return (
    <aside className='sidebar'>
      <div className='sidebar-container'>
        <h3>Regional Weather Forecast</h3>
        <p className='dateToday'>{dateToday}</p>
        <div className='buttonGroup'><CButton color="dark">Temperature</CButton><CButton color="light" variant="outline">Rainfall</CButton> <CButton color="light" variant="outline">Wind</CButton></div>
        <hr  className='spacer'></hr>
        <div className='sidebar-container row'><h2>Sicily</h2><a href='' className='social-link menu'><BiMenu size={25} color='#ffffff' /></a></div>
        <div><WeatherMinMax/></div>
       <div><Chart/></div>
       <hr  className='spacer'></hr>
       <ForecastFetch/>
       <div className='buttonGroup'><CButton color="light" variant="outline"><FontAwesomeIcon icon={faArrowLeft} /> Catania</CButton><CButton color="light" variant="outline">Taormina <FontAwesomeIcon icon={faArrowRight} /></CButton></div>
      </div>
    </aside>
  );
};

export default Sidebar;
