import React from "react";
import { FaUser } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaProcedures } from "react-icons/fa";
import { FaPills } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";

function Service(){
    return(
          <section>
                <div className='container'>
                  <div className="service-section">
        
                    <div className="service-header">
                      <h3 className="service-text">SERVICE</h3>
                      <div className="underline"></div>
                    </div>
        
                    <div className="first-text">
                      <h1 className="service-title">
                        Excellent Medical Services
                      </h1>
                    </div>
        
                    <div className='flex-6'>
                      <div className="care-1">
                        <div className="curcal-4">
                          <FaUser className='icon' />
                        </div>
        
                        <h4 className="emer">Emergency Care</h4>
                        <p className='care-peregraph'> Kasd dolor no lorem nonumy sit labore <br /> tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                      </div>
                      <div className="care-1">
                        <div className="curcal-4">
                          <FaAmbulance className='icon' />
        
                        </div>
        
                        <h4 className="emer">Operation & Surgery</h4>
                        <p className='care-peregraph'> Kasd dolor no lorem nonumy sit labore <br /> tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                      </div>
                      <div className="care-1">
                        <div className="curcal-4">
                          <FaStethoscope className="icon" />
                        </div>
        
                        <h4 className="emer">Outdoor Checkup</h4>
                        <p className='care-peregraph'> Kasd dolor no lorem nonumy sit labore <br /> tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                      </div>
                      <div className="care-1">
                        <div className="curcal-4">
                          {/* <FaStethoscope className="icon" /> */}
                          <FaProcedures className='icon' />
                        </div>
        
                        <h4 className="emer">Ambulance Service</h4>
                        <p className='care-peregraph'> Kasd dolor no lorem nonumy sit labore <br /> tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                      </div>
                      <div className="care-1">
                        <div className="curcal-4">
                          {/* <FaStethoscope className="icon" /> */}
                          <FaPills className='icon' />
                        </div>
        
                        <h4 className="emer">Medicine & Pharmacy</h4>
                        <p className='care-peregraph'> Kasd dolor no lorem nonumy sit labore <br /> tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                      </div>
                      <div className="care-1">
                        <div className="curcal-4">
                          <FaMicroscope className='icon' />
                        </div>
        
                        <h4 className="emer">Blood Testing</h4>
                        <p className='care-peregraph'> Kasd dolor no lorem nonumy sit labore <br /> tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                      </div>
                    </div>
        
                  </div>
        
                </div>
        
              </section>

    )
};
export default Service;