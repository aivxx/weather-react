import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row week-days" id="forecast"></div>
      <div className="codedBy">
        <a
          href="https://github.com/aivxx/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>{" "}
        by Ashley Goldstein
      </div>
      <div className="hostedLink">
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Hosted with Netlify
        </a>
      </div>
    </div>
  );
}
