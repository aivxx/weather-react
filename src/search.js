import React, { useState } from "react";
import axios from "axios";
import Temp from "./temp";
import "./styles.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round.response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container-search">
        <form id="search-city">
          <input
            type="search"
            name="city"
            id="searchCity"
            placeholder="City"
            className="searchInput"
          />
          <input type="submit" value="Search" />

          <button className="location">
            <div className="locationImg" role="img" aria-label="pin">
              📍
            </div>
          </button>
        </form>

        <div className="tempContainer">
          <div className="currentEmoji">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="Clear"
              id="icon"
              className="float-left"
            />
            <div className="dayTemp">{temperature}</div>
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
        </div>
      </div>
    );
  } else {
    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let city = "Miami";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
