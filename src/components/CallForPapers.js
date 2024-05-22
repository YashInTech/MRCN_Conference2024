import React from 'react';

const CallForPapers = () => {
  return (
    <>
    <div className="min-vh-80 text-bg-dark d-flex flex-column justify-content-center">
      <div className="container">
        <div className="cover-container text-center d-flex w-100 p-3 mx-auto flex-column">
          <div className="px-3">
            <h1>Call For Papers</h1>
            <p className="lead">
              Authors are invited to submit their original, unpublished, and quality research papers in the areas including but not limited to:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <ul>
              <li>Cellular systems, 2G/2.5G/3G/4G/5G and beyond</li>
              <li>LTE, WiMAX, WMAN, and other emerging broadband wireless networks</li>
              <li>Small cell and femtocell networks</li>
              <li>Vehicular radio networks</li>
              <li>Cognitive radio networks</li>
              <li>Green wireless networks</li>
              <li>Standardization activities of Emerging Wireless Technology</li>
              <li>Artificial Intelligence</li>
              <li>RF Communication</li>
              <li>Optimization Techniques</li>
            </ul>
          </div>
          <div className="col-lg-6 mb-4">
            <ul>
              <li>Software-defined wireless networks</li>
              <li>Power management and energy conservation techniques</li>
              <li>Wireless edge computing, fog computing, and cloud computing</li>
              <li>Inter-networking of wireless heterogeneous and multi-tier networks</li>
              <li>Machine-to-machine communications</li>
              <li>Pervasive and wearable computing and networking</li>
              <li>Wireless Adhoc-Networks</li>
              <li>Signal Processing</li>
              <li>Electric Vehicles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CallForPapers;