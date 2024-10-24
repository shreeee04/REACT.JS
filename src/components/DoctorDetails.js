import React, { useState } from 'react';
import DoctorModal from './DoctorModal';
import './DoctorDetails.css';

const DoctorDetails = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const doctors = [
        { name: 'Dr. John Smith', specialization: 'Cardiologist', experience: '10 years', image: 'path/to/john-image.jpg', bio: 'Expert in heart diseases and surgeries.' },
        { name: 'Dr. Emily Johnson', specialization: 'Neurologist', experience: '8 years', image: 'path/to/emily-image.jpg', bio: 'Specializes in brain and nervous system disorders.' },
        { name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon', experience: '12 years', image: 'path/to/michael-image.jpg', bio: 'Focus on musculoskeletal injuries and surgeries.' }
    ];

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const closeModal = () => {
        setSelectedDoctor(null);
    };

    return (
        <div className="doctor-details">
            <h2>Our Specialists</h2>
            <div className="doctor-list">
                {doctors.map((doctor, index) => (
                    <div className="doctor-card" key={index} onClick={() => handleDoctorClick(doctor)}>
                        <h3>{doctor.name}</h3>
                        <p>Specialization: {doctor.specialization}</p>
                        <p>Experience: {doctor.experience}</p>
                    </div>
                ))}
            </div>
            <DoctorModal doctor={selectedDoctor} onClose={closeModal} />
        </div>
    );
}

export default DoctorDetails;
