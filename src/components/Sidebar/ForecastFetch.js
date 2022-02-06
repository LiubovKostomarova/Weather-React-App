import React,{useState, useEffect} from "react";

function ForecastFetch() {
    const key = process.env.REACT_APP_API_KEY;

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const [tempMin,setTempMin] = useState([]);
    const [tempMax,setTempMax] = useState([]);
    const [iconID,setIconID] = useState([]);
    
    useEffect(()=> {
        setError("")
        setIsLoading(true)
fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Palermo,sicily&cnt=7&APPID=' + key + '&units=metric/404')
 .then(response => {
if (response.ok) {
return (res=>res.json())
} else {
       throw new Error("Sorry something went wrong")
  }
})
.then(data=>{
    console.log(data);
    setIsLoading(false);
    setIconID(data.weather[0].icon);
    setTempMin(data.list[i].temp.min);
    setTempMax(data.list[i].temp.max);
})
.catch(error => {
    
    setError(error.message)
  })
}, [key])
return (
    <>
    {error && <p>{error}</p>}
    {isLoading && <p>Loading...</p>}
    
    <img src={"http://openweathermap.org/img/wn/" + iconID + ".png"} alt='icon' />
    <div className="Forecast__temperature">
        <span className="temperature__max">
          {Math.round(tempMax)}
          <sup className="temperature__symbol">°</sup>
        </span> - 
        <span className="temperature__min">
          {Math.round(tempMin)}
          <sup className="temperature__symbol">°</sup>
        </span>
      </div>
    
       </>
)
}
export default ForecastFetch;