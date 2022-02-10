import React, { useState, useEffect } from "react";

function ForecastFetch() {
  const API_KEY2 = process.env.REACT_APP_FORECAST_API_KEY;

  const [data, setData] = useState('');

  useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.8167&lon=13.5833&exclude=current,hourly,minutely,alerts&APPID=${API_KEY2}&units=metric`)
      .then(res=>res.json())
        .then(data => {
        setData(data);
      })
      
  }, [])
  return (
    <>
<div className="forecast">
         <ul className="forecast_body">
         {data &&
            data.daily.map((item) => {
              return (
                <li key={item.dt} className="forecast_column">
                  <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="forecast_icon" className="weather_icon" alt= 'weather_icon'/>
                <div>{Math.round(item.temp.min)} ° - {Math.round(item.temp.max)} °</div>
                </li>
              );
            })}
 </ul>
</div>  
    </>
  )
}
export default ForecastFetch;

/*function ForecastFetch() {
  const API_KEY2 = process.env.REACT_APP_FORECAST_API_KEY;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState(null);

  const [tempMin, setTempMin] = useState();
  const [tempMax, setTempMax] = useState();
  const [iconID, setIconID] = useState();

  useEffect(() => {
    setError("")
    setIsLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.8167&lon=13.5833&exclude=current,hourly,minutely,alerts&APPID=${API_KEY2}&units=metric/404`)
      .then(response => {
        if (response.ok) {
          return (res => res.json())
        } else {
          throw new Error("Sorry something went wrong")
        }
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setData(data);
        setIconID(data.daily.weather[0].icon);
        setTempMin(data.daily.temp.min);
        setTempMax(data.daily.temp.max);
      })
      .catch(error => {
        setError(error.message);
        setData(null);
      })
  }, [])
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
         <div className="Forecast__temperature">
          {data &&
            data.daily.map(() => {
              return (
                <div className="forecast" >
                  <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} alt='icon' />
                  <h2>{Math.round(tempMin)} C </h2>
                  <p>{Math.round(tempMax)} C</p>
                </div>

              );
            })}

        </div>
      </ul>
    </>
  )
}
export default ForecastFetch;*/