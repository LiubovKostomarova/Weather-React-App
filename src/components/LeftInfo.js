import React, { useContext, useState } from 'react';
import { WeatherContext } from './Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudShowersHeavy, faSun, faSmog } from '@fortawesome/free-solid-svg-icons';
import WeatherFetch from './WeatherFetch';

const LeftInfo = () => {
  const { temperature, city, weatherCondition, hours, minutes, dayOfWeek, date, month, year } = React.useContext(WeatherContext);

 
  return (
    <>
      <div className='left-info'>
        <div className='location-info'>
          <h1> <WeatherFetch />° C</h1>
          <h3>Malé</h3>
          <p>The Republic of Maldives</p>
          <p>
            {hours < 10 && '0'}
            {hours}:{minutes < 10 && '0'}
            {minutes} - {dayOfWeek}, {date} {month} {year}
          </p>
          
        </div>
        <div className='weather-status'>
          {/* <i className='fas fa-cloud-showers-heavy fa-2x'></i> */}
          {/* <FontAwesomeIcon icon={faCloud} className='weather-icon fa-2x' /> */}
          <React.Fragment>
            {weatherCondition === 'Clouds' && <FontAwesomeIcon icon={faCloud} className='weather-icon fa-2x' />}

            {weatherCondition === 'Rain' && <FontAwesomeIcon icon={faCloudShowersHeavy} className='weather-icon fa-2x' />}

            {weatherCondition === 'Clear' && <FontAwesomeIcon icon={faSun} className='weather-icon fa-2x' />}

            {weatherCondition === 'Mist' && <FontAwesomeIcon icon={faSmog} className='weather-icon fa-2x' />}
            {/* Clouds, Rain, Clear, Mist */}
          </React.Fragment>
          <p>{weatherCondition}</p>
        </div>
      </div>
    </>
  );
};

export default LeftInfo;