import React, { useState } from 'react';
import moment from 'moment';
import { WeatherContext } from '../Context';
import WeatherMinMax from './Weather';
//import WeekContainer from '../WeekContainer';
import { BiMenu } from "react-icons/bi";
import Button from '@mui/material/Button';
import './Sidebar.css';
import Chart from '../Chart';
import ForecastFetch from './ForecastFetch';

const Sidebar = () => {
  const { country, temperature,  weatherCondition, dayOfWeek, date, month, year, searchCity } = React.useContext(WeatherContext);
  const [city, setCity] = useState('');
  let dateToday = moment().format("Do MMM YYYY");

  
  return (
    <aside className='sidebar'>
      <div className='sidebar-container'>
        <h3>Regional Weather Forecast</h3>
        <p className='dateToday'>{dateToday}</p>
        <div><Button variant="outlined" size="small">Temperature</Button><Button variant="text" size="small">Rainfall</Button> <Button variant="text" size="small">Wind</Button></div>
        <hr  className='spacer'></hr>
        <div className='sidebar-container row'><h2>Sicily</h2><BiMenu size={25} color='#ffffff' /></div>
        <div><WeatherMinMax/></div>
       <div><Chart/></div>
       <hr  className='spacer'></hr>
       <ForecastFetch/>
      </div>
    </aside>
  );
};

export default Sidebar;
