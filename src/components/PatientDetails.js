import React from 'react';
import './Home.css';

const PatientDetails = () => {
    return (
        <div className="section">
            <h2>Patient Details</h2>
            <p>Information about registered patients and their treatment history.</p>
            <button className='button'>View Patient Details</button>
        </div>
    );
}

export default PatientDetails;
