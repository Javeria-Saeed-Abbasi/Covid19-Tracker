import React, { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/Virus-pana.png';
import img1 from '../images/floating-mask.png';
import img2 from '../images/preventions.jpg';
import covid from './covid.css';

 const main_card = ({data}) => {
  // console.log("bal", data);
  // console.log("sindh", data);
  // console.log("bal", data);
  console.log("sindh", data);

  return (
    <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{data.Province}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Recovered Cases</h6>
      <p className="card-text">{data.Recovered}</p>
      <h6 className="card-subtitle mb-2 text-muted">Confirmed Cases</h6>
      <p className="card-text">{data.Confirmed}</p>
      <h6 className="card-subtitle mb-2 text-muted">Deaths</h6>
      <p className="card-text">{data.Deaths}</p>
      <h6 className="card-subtitle mb-2 text-muted">Active Cases</h6>
      <p className="card-text">{data.Active}</p>
    </div>
  </div>
  )
}
export default main_card;
