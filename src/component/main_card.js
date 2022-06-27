import React, { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/Virus-pana.png';
import img1 from '../images/floating-mask.png';
import img2 from '../images/preventions.jpg';
import covid from './covid.css';

 const main_card = () => {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">Balochistan</h5>
      <h6 className="card-subtitle mb-2 text-muted">Total Cases</h6>
      <p className="card-text">2333,4344</p>
      <h6 className="card-subtitle mb-2 text-muted">Confirmed Cases</h6>
      <p className="card-text">26893</p>
      <h6 className="card-subtitle mb-2 text-muted">Deaths</h6>
      <p className="card-text">304</p>
      <h6 className="card-subtitle mb-2 text-muted">Active Cases</h6>
      <p className="card-text">793</p>
    </div>
  </div>
  )
}
export default main_card;
