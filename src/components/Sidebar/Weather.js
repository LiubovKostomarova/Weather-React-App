import React, { useState, useEffect } from "react";

function WeatherMinMax() {
  const API_KEY2 = process.env.REACT_APP_WEATHER2_API_KEY;
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  //const [country, setCountry] = useState('');
  const [iconID, setIconID] = useState("");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Palermo,sicily&APPID=${API_KEY2}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMinTemp(data.main.temp_min);
        setMaxTemp(data.main.temp_max);
        setIconID(data.weather[0].icon);
        //setCountry(data.sys.country);
      });
  }, []);
  return (
    <>
      <img
        src={`http://openweathermap.org/img/w/${iconID}.png`}
        alt="weather_icon2"
        className="weather_icon"
        alt="weather_icon"
      />
      {Math.round(minTemp)}° C - {Math.round(maxTemp)} ° C
    </>
  );
}
export default WeatherMinMax;
