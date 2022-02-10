import React from "react";
import moment from "moment";

export default function CurrentTime() {
  let time = new Date().toLocaleTimeString();
  let [currentTime, changeTime] = React.useState(time);
  let date = moment().format("dddd Do MMMM, YYYY");

  function checkTime() {
    time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    changeTime(time);
  }

  setInterval(checkTime, 1000);

  return (
    <div>
      <p>
        {currentTime} - {date}
      </p>
    </div>
  );
}
