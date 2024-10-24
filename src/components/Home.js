import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hospital-name">_Hospital</div>
            <header className="home-header">
                <div className="quotes-container">
                    <p className="quote">The World of Care</p>
                    <p className="quote2">"Consult Our Trusted Specialists, Make an Appointment"</p>
                    <p className="quote3">The best of modern healthcare to ensure you stay healthy, always.</p>
                </div>
            </header>

            <div className="home-content">
                <section className="home-section">
                    <h3>Doctor Details</h3>
                    <ul>
                        <li>Specialists</li>
                        <li>General Practitioners</li>
                        <li>Surgeons</li>
                    </ul>
                    <Link to="/doctor-details" className="home-button">View Doctor Details</Link>
                </section>

                <section className="home-section">
                    <h3>Medical Center Details</h3>
                    <ul>
                        <li>Emergency Services</li>
                        <li>Outpatient Clinics</li>
                        <li>Pharmacy</li>
                    </ul>
                    <Link to="/medical-center-details" className="home-button">View Medical Center Details</Link>
                </section>

                <section className="home-section">
                    <h3>Hospital Facilities</h3>
                    <ul>
                        <li>ICU</li>
                        <li>Laboratories</li>
                        <li>Radiology</li>
                    </ul>
                    <Link to="/hospital-facilities" className="home-button">View Hospital Facilities</Link>
                </section>
            </div>

            <div className="home-buttons">
                <Link to="/login" className="home-button">Login</Link>
                <Link to="/signup" className="home-button">Signup</Link>
                <Link to="/appointment-details" className="home-button">Appointment Details & Appointment form</Link>
            </div>
        </div>
    );
}

export default Home;
