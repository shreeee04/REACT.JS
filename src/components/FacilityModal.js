// FacilityModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FacilityModal = ({ show, handleClose, facility }) => {
    if (!facility) return null;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{facility.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img 
                    src={facility.imageUrl} 
                    alt={facility.name} 
                    style={{ width: '100%', marginBottom: '15px', borderRadius: '8px' }}
                />
                <p>{facility.description}</p>
                <h5>Machines Used:</h5>
                <ul>
                    {facility.machines.map((machine, index) => (
                        <li key={index}>
                            <strong>{machine.name}</strong>: {machine.usage}
                        </li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FacilityModal;
