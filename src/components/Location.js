import React from 'react';
import './Location.css'; // Import the CSS file

const Location = () => {
    return (
        <div className="container">
            <div className="info">
                <h1 className="heading">Event Location</h1>
                <p>
                    U.I.E.T. - University Institute of Engineering & Technology,
                    <br /> Kurukshetra University, Kurukshetra, Haryana
                </p>
                <p>
                    Website - <a className="link" href="https://uietkuk.ac.in">www.uietkuk.ac.in</a>
                </p>
            </div>
            <div className="mapContainer">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.630355431823!2d76.81124881518008!3d29.96130932944995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e38b1c9410e23%3A0xff2e40965dcd7b69!2sUniversity%20Institute%20of%20Engineering%20and%20Technology%2C%20Kurukshetra%20University!5e0!3m2!1sen!2sin!4v1675453272100!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
