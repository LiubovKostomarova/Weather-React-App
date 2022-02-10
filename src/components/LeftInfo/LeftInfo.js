import React from 'react';
import WeatherFetch from './WeatherFetch';
import  CurrentTime from './CurrentTime';
import './LeftInfo.scss';


const LeftInfo = () => {
   return (
    <>
      <div className='left-info'>
        <div className='location-info'>
          <h1> <WeatherFetch />° C</h1>
          <h2>Palermo</h2>
          <p>Sicily</p>
          <p> <CurrentTime /> </p>
          <hr className='left-info dashed_line'></hr>
        </div>
      </div>
    </>
  );
};

export default LeftInfo;