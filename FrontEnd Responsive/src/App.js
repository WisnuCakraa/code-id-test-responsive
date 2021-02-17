import React from "react";
import "./App.css";
import { IMAGE } from "./Assets";
import Card from "./Components/Card";
import MainContent from "./Components/MainContent";
import dummy from "./Utils/car.json";

function App() {
  const _renderNavbar = () => {
    return (
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            HOME
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
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
