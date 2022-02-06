import React from 'react';
import Card from './Card';

const key = process.env.REACT_APP_API_KEY;

class WeekContainer extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Palermo,sicily&cnt=7&APPID=' + key + '&units=metric')
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="">
        <div className="row justify-content-center">
          {this.formatCards()}
        </div>
      </div>
    )
  }
}

export default WeekContainer