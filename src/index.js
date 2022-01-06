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
      <div className="row">
        <div className="col">
          <City />
          <Temp />
        </div>

        <div className="col">
          <Forecast />
        </div>
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
