import React, { useState } from 'react';
import { WeatherContext } from './Context';
import { WeatherAndForecast } from './WeatherAndForecast';
import { FaMapMarkerAlt } from "react-icons/fa";
import '../App.css';

const Sidebar = () => {
  const { country, humidity, wind, feelsLike, searchCity } = React.useContext(WeatherContext);
  const [city, setCity] = useState('');

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
        <form autoComplete='off' id='sidebar-form' onSubmit={handleSubmit}>
          <input id='location-input' type='text' placeholder='Enter Location..' onChange={(e) => setCity(e.target.value)} />
          <button onClick={handleSubmit}>
            <FaMapMarkerAlt className='location-icon fa-2x' />
          </button>
        </form>

        <div className='spacer'></div>

        <ul className='cities'>
          <li>
            <button className='city' onClick={() => searchCity('Tel Aviv')}>
              Tel Aviv
            </button>
          </li>
          <li>
            <button className='city' onClick={() => searchCity('New York')}>
              New York
            </button>
          </li>
          <li>
            <button className='city' onClick={() => searchCity('Tokyo')}>
              Tokyo
            </button>
          </li>
          <li>
            <button className='city' onClick={() => searchCity('Paris')}>
              Paris
            </button>
          </li>
        </ul>

        <div className='spacer'></div>

        <h4 className='weather-details white'>Weather Details</h4>
        <ul className='status-list'>
          <li>
            <p>Country</p>
            <p className='country white'>{country}</p>
          </li>
          <li>
            <p>Humidity</p>
            <p className='humidity white'>{humidity}%</p>
          </li>
          <li>
            <p>Wind</p>
            <p className='white'>{wind}km/h</p>
          </li>
          <li>
            <p>Feels Like</p>
            <p className='feels-like white'>{feelsLike}°</p>
          </li>
        </ul>

        <div className='spacer'></div>
        <WeatherAndForecast />
      </div>
    </aside>
  );
};

export default Sidebar;
