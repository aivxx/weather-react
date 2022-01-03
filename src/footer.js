import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <span className="row week-days" id="forecast"></span>
      <span className="codedBy">
        <a
          href="https://github.com/aivxx/shecodes-WeatherApp"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>{" "}
        by Ashley Goldstein
      </span>
      <span className="hostedLink">
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Hosted with Netlify
        </a>
      </span>
    </div>
  );
}
