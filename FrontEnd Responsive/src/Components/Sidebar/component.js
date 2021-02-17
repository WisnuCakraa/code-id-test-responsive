import React from "react";
import "./style.css";
export default function component() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-side card-body">
          <h2>FILTER</h2>
          <div className="border-bottom" />
          <form>
            <div className="form-group">
              <button
                className="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                KISARAN HARGA
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  harga
                </a>
              </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MERK MOBIL
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  merk
                </a>
              </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MODEL MOBIL
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  model
                </a>
              </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                TRANSMISI
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  transmisi
                </a>
              </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                BAHAN BAKAR
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  bahan bakar
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="button btn btn-primary button-group form-control"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
