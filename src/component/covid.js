import React from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/Virus-pana.png';
import img1 from '../images/floating-mask.png';
import img2 from '../images/preventions.jpg';
import covid from './covid.css';

const Covid = () =>{
   const getCovidData =async () => {    
    try{
        const response = await fetch('https://api.covid19api.com/live/country/pakistan'); 
        const actualData = await response.json();

        console.log(actualData);
        console.log(actualData[0]);
    }
    catch (error){
        console.log(error);
    }
   }
   useEffect(() => {
     getCovidData();
   }, []);
   
   const  getTotalCases =async () =>{
    try{
      const res = await fetch('https://covid.gov.pk/api/graphs/total_cases'); 
      const actualData1 = await res.json();

      console.log(actualData1);
      console.log(actualData1[0]);
  }
  catch (error){
      console.log(error);
  }
   }
   useEffect(() => {
    getTotalCases();
  }, []);
    return(
        <div className="wrapper">
            <header>  
  <nav className="navbar navbar-expand-md bg-nav fixed-top" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" className="logo1" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mx-auto mb-2 mb-md-0">

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Preventions</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Symptoms</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">News</a>
          </li>

          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown04">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}

        </ul>
       
      </div>
    </div>
  </nav>
            </header>
            <section>
                <div className="banner1 position-relative">
                <div className="container">
                  <div className="content1">
                  <div className="text1 position-absolute">
                    <div className="Staatliches">
                      188+ Countries Are Effected By<br/>
                      <span className="Rubik-Moon corona">CORONA</span>
                    </div>
                  </div>
                  <div className="text2 position-absolute">
                    <p className="Rubik">
                      The Virus was first reported by <b>Wuhan, Hubel </b>
                      China on 17 November 2019, and on 11 March 2020, the World Health Organization (WHO) declared the outbreak a panademic.
                    </p>
                  </div>
                  <div className="img1 position-absolute">
                  <img src={img1} alt="img1"/>
                  </div>  
                  </div>
             
                </div>  
                </div>
            </section>
            <section>
              <div className="sec2 d-flex justify-content-center">
                <div className="wrapper1 container">
                <div className="d-flex justify-content-center"> 
                <h1 className="Kdam h-1 py-3">Preventions</h1>
                </div>
                <div className="row">
                <div className="card1 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Total Cases</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className="card2 col-lg-4">
                  <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Recovered Cases</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                </div>
                <div className="card3 col-lg-4">
                  <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Death Cases</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className="img2 d-flex justify-content-center">
                  <img src={img2} alt="prevent"/>
                </div>
                </div>
              
             
              </div>

            </section>
        </div>    
    )
}
export default Covid;