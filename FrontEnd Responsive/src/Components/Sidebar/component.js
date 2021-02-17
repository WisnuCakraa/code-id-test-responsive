import React from "react";
import "./style.css";
export default function component() {
  return (
    <div class="card">
      <div class="card-content">
        <div class="card-side card-body">
          <h2>FILTER</h2>
          <div className="border-bottom" />
          <form>
            <div class="form-group">
              <button
                class="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                KISARAN HARGA
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  harga
                </a>
              </div>
            </div>

            <div class="form-group">
              <button
                class="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MERK MOBIL
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  merk
                </a>
              </div>
            </div>

            <div class="form-group">
              <button
                class="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MODEL MOBIL
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  model
                </a>
              </div>
            </div>

            <div class="form-group">
              <button
                class="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                TRANSMISI
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  transmisi
                </a>
              </div>
            </div>

            <div class="form-group">
              <button
                class="btn btn-secondary dropdown-toggle form-control button-group"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                BAHAN BAKAR
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  bahan bakar
                </a>
              </div>
            </div>

            <button
              type="submit"
              class="button btn btn-primary button-group form-control"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
