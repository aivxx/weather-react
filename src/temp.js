import React from "react";
import "./styles.css";

export default function Temp() {
  return (
    <span className="currentEmoji">
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="Clear"
        id="icon"
        className="float-left"
      />
      <span className="dayTemp">31</span>
      <span className="celsius-fahrenheit">
        <span className="celsius">
          <span id="fahrenheit" className="active">
            °F |
          </span>
          <span className="fahrenheit">
            <span id="celsius"> °C </span>
          </span>
        </span>
      </span>
    </span>
  );
}
