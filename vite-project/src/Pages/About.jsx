import React from "react";
import Navbar from "../Components/Navbar";
import Bimage from "../assets/Images/image 54.png";
import Footer from "../Components/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutHero">
        <img src={Bimage} alt="" />
      </div>
      <div className="aboutText p-4">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.(Hitch cost extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>

      <div className="aboutDesBox p-4">
          <div className="aboutDes">
          <h2 className="fw-bolder pb-3 ">Your destination is waiting. Your van is ready.</h2>
        <button>
          Explore our Vans
        </button>
          </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
