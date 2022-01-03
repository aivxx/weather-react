import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Temp from "./Temp";
import City from "./City";
import Forecast from "./Forecast";
import Footer from "./Footer";

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
