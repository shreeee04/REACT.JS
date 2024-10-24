import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentDetails1.css';

const AppointmentDetails1 = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        patient: '',
        reason: '',
        date: '',
        time: '',
        doctor: ''
    });

    useEffect(() => {
        // Fetch existing appointments from the server when the component mounts
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:3001/0');
                setAppointments(response.data); // Assuming response.data contains the appointment array
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };
        fetchAppointments();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment({
            ...newAppointment,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/0', newAppointment);
            setAppointments([...appointments, { ...newAppointment, id: response.data.id, type: 'upcoming' }]);
            setNewAppointment({ patient: '', reason: '', date: '', time: '', doctor: '' });
        } catch (error) {
            console.error('Error adding appointment:', error);
        }
    };

    const upcomingAppointments = appointments.filter(appt => appt.type === 'upcoming');
    const previousAppointments = appointments.filter(appt => appt.type === 'previous');

    return (
        <div className="appointment-details">
            <h1>Appointment Details</h1>
            <section className="appointment-list">
                <h2>Upcoming Appointments</h2>
                {upcomingAppointments.length > 0 ? (
                    <ul>
                        {upcomingAppointments.map(appt => (
                            <li key={appt.id}>
                                <strong>{appt.patient}</strong> - {appt.reason} on {appt.date} at {appt.time} with {appt.doctor}
                            </li>
                        ))}
                    </ul>
                ) : <p>No upcoming appointments.</p>}
            </section>
            <section className="appointment-list">
                <h2>Previous Appointments</h2>
                {previousAppointments.length > 0 ? (
                    <ul>
                        {previousAppointments.map(appt => (
                            <li key={appt.id}>
                                <strong>{appt.patient}</strong> - {appt.reason} on {appt.date} at {appt.time} with {appt.doctor}
                            </li>
                        ))}
                    </ul>
                ) : <p>No previous appointments.</p>}
            </section>
            <section className="new-appointment">
                <h2>Make a New Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Patient Name</label>
                        <input type="text" name="patient" value={newAppointment.patient} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>Reason for Appointment</label>
                        <input type="text" name="reason" value={newAppointment.reason} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" name="date" value={newAppointment.date} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input type="time" name="time" value={newAppointment.time} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>Doctor Preference</label>
                        <input type="text" name="doctor" value={newAppointment.doctor} onChange={handleInputChange} required />
                    </div>
                    <button type="submit">Add Appointment</button>
                </form>
            </section>
        </div>
    );
}

export default AppointmentDetails1;
