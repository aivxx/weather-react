import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <span className="humidity">Humidity:</span>
      <span className="humidPercent">20%</span>
      <br />
      <span className="feelsLike">Feels Like:</span>
      <span className="feelsType">34°</span>
      <br />
      <span className="wind">Wind Speed:</span>
      <span className="windSpeed">10mph</span>
      <br />
      <span className="sky">Clear</span>
    </div>
  );
}
