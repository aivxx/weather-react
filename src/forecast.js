import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="humidity">Humidity:</div>
      <div className="humidPercent">20%</div>
      <br />
      <div className="feelsLike">Feels Like:</div>
      <div className="feelsType">34°</div>
      <br />
      <div className="wind">Wind Speed:</div>
      <div className="windSpeed">10mph</div>
      <br />
      <div className="sky">Clear</div>
    </div>
  );
}
