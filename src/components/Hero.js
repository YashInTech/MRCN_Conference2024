import React from 'react';

function Hero() {
  return (
    <>
    <div className="container col-xxl-10 px-4 pt-5 my-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-4 rounded-3 border shadow-lg">
        <div className="col-10 col-sm-8 col-lg-5">
          <img src='images/springer_uiet.jpeg'  alt="Bootstrap Themes" width="400px" loading="lazy"/>
        </div>        
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 fst-italic">Mobile Radio Communication & 5G Networks - 2024</h1>
          <p>23th-24th August-2024</p>
          <p className="lead"><strong>Organised by:</strong> Department of Electronics & Communication Engineering,
          University Institute of Engineering & Technology, Kurukshetra University, Kurukshetra, Haryana</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Hero