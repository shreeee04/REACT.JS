
import React, { useState } from 'react';
import FacilityModal from './FacilityModal'; 
import { Container, Row, Col } from 'react-bootstrap'; 

const facilities = [
    {
        name: 'Radiology Department',
        description: 'Advanced imaging equipment for diagnostic purposes.',
        machines: [
            { name: 'MRI Scanner', usage: 'Used for detailed internal body imaging.' },
            { name: 'CT Scanner', usage: 'Provides cross-sectional images of the body.' }
        ],
        imageUrl: 'https://your-domain.com/images/radiology.jpg' 
    },
    {
        name: 'Cardiology Department',
        description: 'Specialized machines for heart care.',
        machines: [
            { name: 'ECG Machine', usage: 'Monitors heart rhythm and electrical activity.' },
            { name: 'Echocardiogram', usage: 'Creates ultrasound images of the heart.' }
        ],
        imageUrl: 'https://your-domain.com/images/cardiology.jpg' 
    },
    {
        name: 'Surgical Center',
        description: 'State-of-the-art surgical equipment for a variety of procedures.',
        machines: [
            { name: 'Surgical Robot', usage: 'Used for minimally invasive surgeries.' },
            { name: 'Anesthesia Machine', usage: 'Delivers precise amounts of anesthesia to patients.' }
        ],
        imageUrl: 'https://your-domain.com/images/surgical-center.jpg' 
    }
];

const HospitalFacilities = () => {
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShow = (facility) => {
        setSelectedFacility(facility);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedFacility(null);
    };

    return (
        <Container>
            <h3>Hospital Facilities</h3>
            <Row>
                {facilities.map((facility, index) => (
                    <Col md={4} key={index} className="facility-item" onClick={() => handleShow(facility)}>
                        <div style={{
                            padding: '20px',
                            backgroundColor: '#f8f9fa',
                            marginBottom: '20px',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            textAlign: 'center',
                            transition: 'background-color 0.3s ease'
                        }}>
                            <h4>{facility.name}</h4>
                            <p>{facility.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Facility Modal */}
            {selectedFacility && (
                <FacilityModal 
                    show={showModal} 
                    handleClose={handleClose} 
                    facility={selectedFacility} 
                />
            )}
        </Container>
    );
};

export default HospitalFacilities;
