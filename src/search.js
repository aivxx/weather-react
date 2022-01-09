import React from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  let apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
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
}
