import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import DoctorDetails from './components/DoctorDetails';
import MedicalCenterDetails from './components/MedicalCenterDetails';
import HospitalFacilities from './components/HospitalFacilities';
import AppointmentDetails1 from './components/AppointmentDetails1';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/doctor-details" element={<DoctorDetails />} />
                <Route path="/medical-center-details" element={<MedicalCenterDetails />} />
                <Route path="/hospital-facilities" element={<HospitalFacilities />} />
                <Route path="/appointment-details" element={<AppointmentDetails1 />} />
            </Routes>
        </Router>
    );
}

export default App;
