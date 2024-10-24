import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MedicalCenterModal.css';

const MedicalCenterModal = ({ center, onClose }) => {
    if (!center) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{center.name}</h2>
                <p><strong>Description:</strong> {center.description}</p>
                <p><strong>Services:</strong> {center.services.join(', ')}</p>
                <p><strong>Contact:</strong> {center.contact}</p>
                <div className="map-container">
                    <MapContainer center={[center.latitude, center.longitude]} zoom={13} style={{ height: '300px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[center.latitude, center.longitude]}>
                            <Popup>
                                {center.name}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default MedicalCenterModal;
