import React, { useState } from 'react';
import moment from 'moment';
import { WeatherContext } from '../Context';
import WeatherMinMax from './Weather';
//import WeekContainer from '../WeekContainer';
import { BiMenu } from "react-icons/bi";
import Button from '@mui/material/Button';
import './Sidebar.css';
import Chart from '../Chart';

const Sidebar = () => {
  const { country, temperature,  weatherCondition, dayOfWeek, date, month, year, searchCity } = React.useContext(WeatherContext);
  const [city, setCity] = useState('');
  let dateToday = moment().format("Do MMM YYYY");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city) {
      searchCity(city);
    }

    console.log(city);
  };

  
  return (
    <aside className='sidebar'>
      <div className='sidebar-container'>
        <h3>Regional Weather Forecast</h3>
        <p className='dateToday'>{dateToday}</p>
        <div><Button variant="outlined" size="small">Temperature</Button><Button variant="text" size="small">Rainfall</Button> <Button variant="text" size="small">Wind</Button></div>
        <div className='spacer'></div>
        <h2>Sicily</h2>
        <p><WeatherMinMax/></p>
       <BiMenu size={25} />
            
       <div className='spacer'></div>

      <Chart/>
   
       
      </div>
    </aside>
  );
};

export default Sidebar;
