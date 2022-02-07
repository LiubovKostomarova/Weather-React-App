import React from 'react';
import DescriptionCard from './Card';

let forecastJSON = [{
  "cod": "200",
  "message": 0,
  "cnt": 7,
  "list": [{
    "dt": 1644235200,
    "main": {
      "temp": 10.88,
      "feels_like": 9.83,
      "temp_min": 10.88,
      "temp_max": 11.1,
      "pressure": 1018,
      "sea_level": 1018,
      "grnd_level": 955,
      "humidity": 69,
      "temp_kf": -0.22
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }],
    "clouds": {
      "all": 17
    },
    "wind": {
      "speed": 4.48,
      "deg": 285,
      "gust": 6.94
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2022-02-07 12:00:00"
  }, {
    "dt": 1644246000,
    "main": {
      "temp": 10.29,
      "feels_like": 9.31,
      "temp_min": 9.1,
      "temp_max": 10.29,
      "pressure": 1018,
      "sea_level": 1018,
      "grnd_level": 954,
      "humidity": 74,
      "temp_kf": 1.19
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }],
    "clouds": {
      "all": 34
    },
    "wind": {
      "speed": 4.75,
      "deg": 298,
      "gust": 11.49
    },
    "visibility": 10000,
    "pop": 0.11,
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2022-02-07 15:00:00"
  }, {
    "dt": 1644256800,
    "main": {
      "temp": 9.27,
      "feels_like": 6.7,
      "temp_min": 8.46,
      "temp_max": 9.27,
      "pressure": 1018,
      "sea_level": 1018,
      "grnd_level": 954,
      "humidity": 79,
      "temp_kf": 0.81
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 60
    },
    "wind": {
      "speed": 4.94,
      "deg": 312,
      "gust": 9.76
    },
    "visibility": 10000,
    "pop": 0.29,
    "rain": {
      "3h": 0.14
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-02-07 18:00:00"
  }, {
    "dt": 1644267600,
    "main": {
      "temp": 8.42,
      "feels_like": 6.09,
      "temp_min": 8.42,
      "temp_max": 8.42,
      "pressure": 1019,
      "sea_level": 1019,
      "grnd_level": 956,
      "humidity": 91,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 97
    },
    "wind": {
      "speed": 3.94,
      "deg": 326,
      "gust": 8.51
    },
    "visibility": 10000,
    "pop": 0.3,
    "rain": {
      "3h": 0.29
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-02-07 21:00:00"
  }, {
    "dt": 1644278400,
    "main": {
      "temp": 6.37,
      "feels_like": 3.53,
      "temp_min": 6.37,
      "temp_max": 6.37,
      "pressure": 1022,
      "sea_level": 1022,
      "grnd_level": 957,
      "humidity": 88,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 90
    },
    "wind": {
      "speed": 4.03,
      "deg": 4,
      "gust": 8.31
    },
    "visibility": 10000,
    "pop": 0.41,
    "rain": {
      "3h": 0.4
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-02-08 00:00:00"
  }, {
    "dt": 1644289200,
    "main": {
      "temp": 3.73,
      "feels_like": 0.34,
      "temp_min": 3.73,
      "temp_max": 3.73,
      "pressure": 1023,
      "sea_level": 1023,
      "grnd_level": 958,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 63
    },
    "wind": {
      "speed": 3.93,
      "deg": 4,
      "gust": 7.57
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-02-08 03:00:00"
  }, {
    "dt": 1644300000,
    "main": {
      "temp": 2.91,
      "feels_like": -1.08,
      "temp_min": 2.91,
      "temp_max": 2.91,
      "pressure": 1026,
      "sea_level": 1026,
      "grnd_level": 961,
      "humidity": 70,
      "temp_kf": 0
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03n"
    }],
    "clouds": {
      "all": 32
    },
    "wind": {
      "speed": 4.64,
      "deg": 21,
      "gust": 9.08
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-02-08 06:00:00"
  }],
  "city": {
    "id": 2523918,
    "name": "Province of Palermo",
    "coord": {
      "lat": 37.8167,
      "lon": 13.5833
    },
    "country": "IT",
    "population": 1246094,
    "timezone": 3600,
    "sunrise": 1644213871,
    "sunset": 1644251708
  }
}];

function ForecastList() {
  return ( 
  <>
    <div> {forecastJSON.map((Forecast) =>
        <DescriptionCard >
        tempMin = {Forecast.list.main.temp_min}
        tempMax = {Forecast.list.main.temp_max} 
        city = {Forecast.list.city.name}
        </DescriptionCard>
      )} 
      </div>  
    </>
  );
}
export default ForecastList