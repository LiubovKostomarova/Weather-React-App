import React, { useState, useEffect } from "react";

function ForecastFetch() {
  const key = process.env.REACT_APP_API_KEY;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState(null);

  const [tempMin, setTempMin] = useState([]);
  const [tempMax, setTempMax] = useState([]);
  const [iconID, setIconID] = useState([]);

  useEffect(() => {
    setError("")
    setIsLoading(true)
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Palermo,sicily&cnt=7&APPID=' + key + '&units=metric/404')
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
        //setIconID(data.weather[0].icon);
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
        <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} alt='icon' />
        <div className="Forecast__temperature">
          {data &&
            data.map(({ dt, tempMin, tempMax }) => {
              return (
                <div className="forecast" key={dt}>
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