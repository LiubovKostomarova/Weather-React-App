import React, { useState, useEffect } from "react";

function ForecastFetch() {
  const API_KEY2 = process.env.REACT_APP_FORECAST_API_KEY;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState(null);

  const [tempMin, setTempMin] = useState([]);
  const [tempMax, setTempMax] = useState([]);
  const [iconID, setIconID] = useState([]);

  useEffect(() => {
    setError("")
    setIsLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Palermo,sicily&cnt=7&APPID=${API_KEY2}&units=metric/404`)
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
        setIconID(data.list.weather[0].icon);
        setTempMin(data.list.main.temp_min);
        setTempMax(data.list.main.temp_max);
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
            data.list.map(() => {
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
export default ForecastFetch;