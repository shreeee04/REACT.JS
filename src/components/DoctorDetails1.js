import React from 'react';
import './DoctorDetails1.css'; // Make sure to import the CSS file for styling

const DoctorDetails1 = () => {
    // Sample doctor data (you can replace this with real data or props)
    const doctor = {
        name: 'Dr. John Doe',
        specialization: 'Cardiologist',
        experience: '15 years',
        contact: '123-456-7890',
        picture: '/path-to-doctor-picture.jpg' // Replace with the actual image path
    };

    return (
        <div className="doctor-details-container">
            <div className="doctor-details">
                <h2>{doctor.name}</h2>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Experience:</strong> {doctor.experience}</p>
                <p><strong>Contact:</strong> {doctor.contact}</p>
            </div>
            <div className="doctor-picture">
                <img src={doctor.picture} alt={doctor.name} className="doctor-image" />
            </div>
        </div>
    );
};

export default DoctorDetails1;
