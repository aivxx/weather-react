import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import Temp from "./temp";
import City from "./city";
import Forecast from "./forecast";
import Footer from "./footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <span className="row">
        <span className="col">
          <City />
          <Temp />
        </span>

        <span className="col">
          <Forecast />
        </span>
        <span className="col">
          <Footer />
        </span>
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
