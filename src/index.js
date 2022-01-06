import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import Temp from "./temp";
import City from "./city";
import Forecast from "./forecast";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <Search />
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col">
            <City />
          </div>
        </div>

        <div className="row align-tems-end">
          <div className="col">
            <Temp />
          </div>
          <div className="col">
            <Forecast />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
