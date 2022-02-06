import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = process.env.REACT_APP_API_KEY;
    const [mainTemp,setMainTemp] = useState('');
    const [country, setCountry] = useState('');
    const [description,setDescription] = useState('');
    const [iconID,setIconID] = useState('');
    useEffect(()=> {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Palermo,sicily&APPID=' + key + '&units=metric')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setMainTemp(data.main.temp);
    setIconID(data.weather[0].icon);
    //setCountry(data.sys.country);
})
},[])
return (
    <>
    <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>{Math.round(mainTemp)}
       </>
)
}
export default WeatherFetch;