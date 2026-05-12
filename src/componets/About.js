import React from "react";

import aboutImg from "../img/about (1).jpg";
import doctorImg from "../img/999.png";
import serviceImg from "../img/2.png";
// import testImg from "../img/999-removebg-preview.png";
import adf from "../img/124.png"
import ambulanceImg from "../img/4.png";

function About() {
  return (
    <section>
      <div className="container">
        <div className="flex-3">

          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>

          <div>
            <h3 className="abou-text">ABOUT US

            </h3>
            <h1 className="about-title">
              Best Medical Care For <br /> Yourself and Your Family
            </h1>

            <p className="dicription">
              Tempor erat elitr at rebum at at clita aliquyam consetetur.
              Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
              Aliquyam diam amet diam et eos sadipscing labore.
            </p>

            <div className="flex-5">

              <div className="curacal-2">
                <div className="bed">
                  {/* <img src={doctorImg} alt="doctor" className="bed-img" /> */}
                  <img src={require('../img/999.png')}alt="" />
                  <h4 className="title-black">Qualified</h4>
                  <h4 className="title-blue">Doctors</h4>
                </div>
              </div>
              <div className="curacal-2">
                <div className="bed">
                  <img src={serviceImg} alt="doctor" className="bed-img"/>
                  <h4 className="title-black">Emergency</h4>
                  <h4 className="title-blue">Doctors</h4>
                </div>
              </div>
              <div className="curacal-2">
                <div className="bed">
                  <img src={adf} alt="doctor" className="bed-img" />
                  <h4 className="title-black">Accurate</h4>
                  <h4 className="title-blue">Doctors</h4>
                </div>
              </div>
              <div className="curacal-2">
                <div className="bed">
                  <img src={ambulanceImg} alt="doctor" className="bed-img" />
                  <h4 className="title-black">Free</h4>
                  <h4 className="title-blue">Doctors</h4>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
