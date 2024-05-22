import React from 'react';

function ImportantDates() {
  return (
    <>
    <div className='container my-4'>
        <div className="position-relative p-2 text-muted bg-body border border-dashed rounded-5">
            <h1 className="text-body-emphasis text-center">Important Dates</h1>
            <div className="d-flex flex-row flex-wrap bg-body-secondary rounded-5 justify-content-between">
            {[
                { title: "Last Dates of Paper submission", date: "25th June 2024" },
                { title: "Last date for receiving CRP and Author Registration", date: "30th July 2024" },
                { title: "Paper Acceptance Notification", date: "10th August 2024" },
                { title: "Conference Dates", date: "23rd-24th August 2024" }
            ].map((item, index) => (
                <div key={index} className="p-2" style={{ flex: '1 1 20%', minWidth: '250px' }}>
                <div className="modal modal-sheet position-static d-block py-md-3" id="modalChoice">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-3 shadow" style={{ width: '100%', height: '150px' }}>
                        <div className="modal-body p-4 text-center d-flex flex-column justify-content-center">
                        <h5 className="mb-0">{item.title}</h5>
                        <p className="mb-0">{item.date}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default ImportantDates;