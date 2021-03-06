import React from "react";
import "./App.css";
import Card from "./Components/Card";
import MainContent from "./Components/MainContent";
import dummy from "./Utils/car.json";

function App() {
  const _renderNavbar = () => {
    return (
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            DAFTAR MOBIL
          </a>
        </li>
      </ul>
    );
  };
  return (
    <div className="container-fluid">
      <div className="display-dekstop">
        {_renderNavbar()}
        <MainContent>
          <Card data={dummy} />
        </MainContent>
      </div>
      <div className="display-mobile">
        <Card data={dummy} />
      </div>
    </div>
  );
}

export default App;
