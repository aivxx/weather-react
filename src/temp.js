import React from "react";
import "./styles.css";

export default function Temp() {
  return (
    <div className="currentEmoji">
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="Clear"
        id="icon"
        className="float-left"
      />
      <div className="dayTemp">31</div>
      <div className="celsius-fahrenheit">
        <div className="celsius">
          <div id="fahrenheit" className="active">
            °F |
          </div>
          <div className="fahrenheit">
            <div id="celsius"> °C </div>
          </div>
        </div>
      </div>
    </div>
  );
}
