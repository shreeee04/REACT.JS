import React from 'react';
import './DoctorModal.css';

const DoctorModal = ({ doctor, onClose }) => {
    if (!doctor) return null; // If no doctor is selected, don't render anything

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{doctor.name}</h2>
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Experience:</strong> {doctor.experience}</p>
                <p><strong>Bio:</strong> {doctor.bio}</p>
            </div>
        </div>
    );
}

export default DoctorModal;
