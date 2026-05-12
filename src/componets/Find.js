import React from "react";

function Find() {
    return (
        <section className='bg-size'>
            <div className='container'>
                <h3 className="service-text-1"> FIND A DOCTER </h3>
                <div className="underline-3">

                </div>
                <div className="healthcare-section">
                    <div className="healthcare-container">

                        <h1 className="healthcare-title">
                            Find A Healthcare <br /> Professionals
                        </h1>

                        <p className="healthcare-text">
                            Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo
                            lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea
                            voluptua ipsum sit justo
                        </p>

                        <div className="search-box">
                            <select className="search-dept">
                                <option>Department</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Orthopedics</option>
                            </select>

                            <input
                                type="text"
                                placeholder="Keyword"
                                className="search-input"
                            />

                            <button className="search-btn">Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
};

export default Find;