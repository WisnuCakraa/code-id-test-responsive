import React from "react";
import { IMAGE } from "../../Assets";
import { formatNumber } from "../../Utils/number";
import "./style.css";

export default function component(carData) {
  const _renderCarData = (dataProps) => {
    return dataProps.data.map((item) => {
      const {
        price,
        otr,
        carBrand,
        carDescription,
        installments,
        credit,
      } = item;

      const { title, cc, type, fuel } = carDescription;

      return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="action-footer border-left-card">
            <div className="row ml-1">
              <div className="col-lg-12 col-md-12 col-sm-6 col-6">
                <div className="icon-heart mt-2">
                  <img src={IMAGE.HEART} />
                </div>
                <div className="text-center py-4 mt-4">
                  <img className="img-fluid" src={IMAGE.FORTUNER} alt="car" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-6 col-6">
                <div className="card-body">
                  <div className="dekstop-view row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="text-price">
                        <div className="card-title font-roboto ml-3 mt-1">
                          {formatNumber(price)}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-1 ">
                      <span className="ml-2 mt-1">{otr}</span>
                    </div>
                  </div>
                  <p className="text-title text-uppercase mt-2">{carBrand}</p>
                  <p className="text-uppercase">{title}</p>
                  <div className="d-flex">
                    <small className="sub-title">{cc} cc</small>
                    <small>
                      <img className="circle-icon" src={IMAGE.CIRCLE}></img>
                    </small>
                    <small className="sub-title">{type}</small>
                    <small>
                      <img className="circle-icon" src={IMAGE.CIRCLE}></img>
                    </small>
                    <small className="sub-title">{fuel}</small>
                  </div>
                  <div className="device-view row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="text-price">
                        <div className="card-title font-roboto ml-3 mt-1">
                          {formatNumber(price)}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-1 ">
                      <span className="ml-2 mt-1">{otr}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-11 border-arrow"></div>
            <div className="col-lg-12 ">
              <p className="mr-4 mt-3">
                Angsuran Mulai dari
                <span className="text-primary" style={{ fontWeight: 800 }}>
                  &nbsp;{formatNumber(installments)}/Bulan
                </span>
              </p>
              <div className="d-flex">
                <p className="sub-title mr-1">Menggunakan simulasi kredit</p>
                <span className="text-uppercase" style={{ fontWeight: 700 }}>
                  {credit}
                </span>
              </div>
            </div>
            <div className="row ml-1">
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <div className="card">
                  <img src={IMAGE.STEERING} className="img-fluid img-action" />
                  <span className="text-action text-uppercase">test drive</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <div className="card">
                  <img
                    src={IMAGE.CALCULATOR}
                    className="img-action img-fluid"
                  />
                  <span className="text-action text-uppercase">simulasi</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <div className="card">
                  <img src={IMAGE.BALANCE} className="img-action img-fluid" />
                  <span className="text-action text-uppercase">banding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="row">{_renderCarData(carData)}</div>;
}
