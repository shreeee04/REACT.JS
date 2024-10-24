import React, { useState } from 'react';
import MedicalCenterModal from './MedicalCenterModal';
import './MedicalCenterDetails.css';

const MedicalCenterDetails = () => {
    const [selectedCenter, setSelectedCenter] = useState(null);
    const centers = [
        { 
            name: 'City Health Clinic', 
            description: 'A modern clinic offering a range of services including general practice, pediatrics, and emergency care.', 
            services: ['General Check-ups', 'Pediatrics', 'Emergency Care'], 
            contact: '123-456-7890', 
            location: 'City Health Clinic, New York, NY',
            latitude: 40.7128,  // Example latitude for New York
            longitude: -74.0060 // Example longitude for New York
        },
        { 
            name: 'Downtown Medical Center', 
            description: 'Specialized in advanced healthcare services and outpatient procedures.', 
            services: ['Surgery', 'Radiology', 'Physical Therapy'], 
            contact: '098-765-4321', 
            location: 'Downtown Medical Center, Los Angeles, CA',
            latitude: 34.0522,  // Example latitude for Los Angeles
            longitude: -118.2437 // Example longitude for Los Angeles
        },
        { 
            name: 'Northside Hospital', 
            description: 'A full-service hospital with a commitment to patient care and community service.', 
            services: ['Cardiology', 'Orthopedics', 'Maternity Care'], 
            contact: '555-123-4567', 
            location: 'Northside Hospital, Chicago, IL',
            latitude: 41.8781,  // Example latitude for Chicago
            longitude: -87.6298 // Example longitude for Chicago
        }
    ];
    

    const handleCenterClick = (center) => {
        setSelectedCenter(center);
    };

    const closeModal = () => {
        setSelectedCenter(null);
    };

    return (
        <div className="medical-center-details">
            <h2>Medical Centers</h2>
            <div className="center-list">
                {centers.map((center, index) => (
                    <div className="center-card" key={index} onClick={() => handleCenterClick(center)}>
                        <h3>{center.name}</h3>
                        <p>{center.description}</p>
                    </div>
                ))}
            </div>
            <MedicalCenterModal center={selectedCenter} onClose={closeModal} />
        </div>
    );
}

export default MedicalCenterDetails;
