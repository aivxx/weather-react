import React, { useState } from "react";
import axios from "axios";
import Temp from "./temp";
import "./styles.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
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
      </div>
    );
    <Temp />;
  } else {
    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let city = "Miami";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
