import React from 'react'

function Center() {
  return (
    <>
    <div className="d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="px-3">
          <h1 className="display-4">Don't miss out on this year's conference</h1>
          <p className="lead">Secure your spot today and join us for an unforgettable experience.</p>
          <div class="px-3 d-flex justify-content-center">
            <ul className='list-inline'>
              <li>All the accepted papers will be published by Springer in book series.</li>
              <li>Lecture Notes in Networks and Systems.</li>
              <li>This series is indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago.</li>
            </ul>
          </div>
          <a href="/" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Center