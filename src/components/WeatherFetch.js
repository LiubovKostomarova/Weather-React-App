import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = '0f6b683148f7ede998ec32670576961c';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    useEffect(()=> {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Male,maldives&APPID=' +key+ '&units=metric')
.then(res=>res.json())
.then(data=>{
    //console.log(data);
    setMainTemp(data.main.temp);
    //setFeelsLike(data.main.feels_like);
    //setDescription(data.weather[0].description);
    //setMain(data.weather[0].main);
    setIconID(data.weather[0].icon);
})
},[])
return (
    <>
    <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>{Math.round(mainTemp)}
       </>
)
}
export default WeatherFetch;