import React from "react";
import Navbar from "../Components/Navbar";
import Van1 from '../assets/Images/Van1.png'
import Van2 from '../assets/Images/Van2.png'
import Van3 from '../assets/Images/Van3.png'
import Van4 from '../assets/Images/Van4.png'
import Van5 from '../assets/Images/Van5.png'
import Van6 from '../assets/Images/Van6.png'
import Footer from "../Components/Footer";
const Vans = () => {
  return (
    <div>
      <Navbar />
      <div className="vans p-4">
        <h1 className="fw-bolder">Explore our van options</h1>
        <div className="butts d-flex justify-content-between pt-3">
          <button>simple</button>
          <button>Luxury</button>
          <button>Rugged</button>
          <button id="clearbtn">Clear Filters</button>
        </div>
        <div className="cards d-flex justify-content-between">
          <div class="card">
            <img src={Van1} alt="" />
            <div class="card-body">
              <div className="d-flex align-items-center justify-content-between">
              <h6 class="card-title fw-bolder">Modest Explorer</h6>
              <h6 class="card-text fw-bolder">$80 <span>/day</span></h6>
              </div>
              <button class="simpleBtn">
                Simple
              </button>
            </div>
          </div>
          <div class="card">
            <img src={Van2} alt="" />
            <div class="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h6 class="card-title fw-bolder">Beach <br/> Bum</h6>
              <h6 class="card-text fw-bolder">$80 <br/> <span>/day</span></h6>
              </div>
              <button class="ruggedBtn">
                Rugged
              </button>
            </div>
          </div>
        </div>
        <div className="cards d-flex justify-content-between my-4">
          <div class="card">
            <img src={Van3} alt="" />
            <div class="card-body">
              <div className="d-flex align-items-center justify-content-between">
              <h6 class="card-title fw-bolder">Reliable Red</h6>
              <h6 class="card-text fw-bolder">$100 <span>/day</span></h6>
              </div>
              <button class="luxuryBtn">
                Luxury
              </button>
            </div>
          </div>
          <div class="card">
            <img src={Van4} alt="" />
            <div class="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h6 class="card-title fw-bolder">Dream <br/> Finder</h6>
              <h6 class="card-text fw-bolder">$65 <br/> <span>/day</span></h6>
              </div>
              <button class="simpleBtn">
                Simple
              </button>
            </div>
          </div>
        </div>
        <div className="cards d-flex justify-content-between">
          <div class="card">
            <img src={Van5} alt="" />
            <div class="card-body">
              <div className="d-flex align-items-center justify-content-between">
              <h6 class="card-title fw-bolder">The Cruiser</h6>
              <h6 class="card-text fw-bolder">$120 <span>/day</span></h6>
              </div>
              <button class="luxuryBtn">
                Luxury
              </button>
            </div>
          </div>
          <div class="card">
            <img src={Van6} alt="" />
            <div class="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h6 class="card-title fw-bolder">Green <br/> Wonder</h6>
              <h6 class="card-text fw-bolder">$80 <br/> <span>/day</span></h6>
              </div>
              <button class="ruggedBtn">
                Rugged
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Vans;
