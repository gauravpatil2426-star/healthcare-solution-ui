import React from "react";

function Hero() {
    return (
        <section>
            <div className='bg-img'>
                <div className='container'>
                    <div className='set'>
                        <h3 className='wel-text'>Welcome To Medinova</h3>
                        <h2 className='title'>Best Healthcare <br /> Solution In Your City</h2>
                    </div>
                    <div className="hero-buttons">
                        <button className="btn primary">Find Doctor</button>
                        <button className="btn outline">Appointment</button>
                    </div>
                </div>

            </div>

        </section>
    );
}
export default Hero;