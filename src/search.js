import React from "react";
import "./styles.css";

export default function Search() {
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
