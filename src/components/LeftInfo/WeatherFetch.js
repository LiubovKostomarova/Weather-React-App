import React, { useState, useEffect } from "react";

function WeatherFetch() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [mainTemp, setMainTemp] = useState("");
  //const [country, setCountry] = useState('');
  //const [description,setDescription] = useState('');
  const [iconID, setIconID] = useState("");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Palermo,sicily&APPID=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMainTemp(data.main.temp);
        setIconID(data.weather[0].icon);
        //setCountry(data.sys.country);
      });
  }, []);
  return (
    <>
      <img
        src={`http://openweathermap.org/img/w/${iconID}.png`}
        alt="weather_icon1"
      />
      {Math.round(mainTemp)}
    </>
  );
}
export default WeatherFetch;
