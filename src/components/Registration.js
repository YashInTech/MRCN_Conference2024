import React from 'react';

function Registration() {
  return (
    <>
      <div className='bg-body-secondary pt-3'>
        <h1 className="justify-content-center text-center">Registration Details</h1>
        <div className="d-flex justify-content-center">
          <div className="modal modal-sheet position-static d-block p-4 py-md-5 mx-2" tabIndex="-1" role="dialog" id="modalTour1">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5">
                  <h2 className="fw-bold mb-0">Registration Fees</h2>
                  <ul className="d-grid gap-2 my-3 list-unstyled small">
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Indian Author (Academician)</h5>
                      </div>
                      <div className="text-end">Rs. 4000/-</div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Industry Author</h5>
                      </div>
                      <div className="text-end">Rs. 4000/-</div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Student Author (Student/Research Scholar)</h5>
                      </div>
                      <div className="text-end">Rs. 3000/-</div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Foreign Authors</h5>
                      </div>
                      <div className="text-end">$100/-</div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Indian Participant/Attendee</h5>
                      </div>
                      <div className="text-end">Rs. 1000/-</div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Foreign Participant/Attendee</h5>
                      </div>
                      <div className="text-end">$50/-</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="modal modal-sheet position-static d-block p-4 py-md-5 mx-2" tabIndex="-1" role="dialog" id="modalTour2">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5">
                  <h2 className="fw-bold mb-0">Registration Account Details Required</h2>
                  <ul className="d-grid gap-2 my-3 list-unstyled small">
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Account Number</h5>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Account Name</h5>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Bank</h5>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">Branch</h5>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <div>
                        <h5 className="mb-0">IFSC Code</h5>
                      </div>
                    </li>
                  </ul>
                  <button type="button" className="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
