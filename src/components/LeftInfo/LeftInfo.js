import React from 'react';
import { WeatherContext } from '../Context';
import WeatherFetch from './WeatherFetch';
import  CurrentTime from './CurrentTime';
import './LeftInfo.css';


const LeftInfo = () => {
  const { temperature, city, weatherCondition, hours, minutes, dayOfWeek, date, month, year } = React.useContext(WeatherContext);

 
  return (
    <>
      <div className='left-info'>
        <div className='location-info'>
          <h1> <WeatherFetch />° C</h1>
          <h2>Palermo</h2>
          <p>Sicily</p>
          <p> <CurrentTime /> </p>
        </div>
      </div>
    </>
  );
};

export default LeftInfo;