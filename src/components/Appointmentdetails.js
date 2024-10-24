import React, { useState } from 'react';
import axios from 'axios';  // Import Axios

const AppointmentDetails = () => {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [errors, setErrors] = useState({}); // To store form validation errors
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage form submission state

  // Function to validate the form
  


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true); // Set submitting state to true

      // Prepare data to be sent to the server
      const appointmentData = {
        patientName,
        appointmentDate,
      };

      try {
        // Send POST request to the server (replace URL with your backend endpoint)
        const response = await axios.post('https://your-backend-url.com/api/appointments', appointmentData);
        
        // Show success message if request is successful
        alert('Appointment added successfully');
        
        // Reset form fields
        setPatientName('');
        setAppointmentDate('');
        setErrors({});
      } catch (error) {
        // Handle error during request
        if (error.response) {
          // The request was made and the server responded with a status code
          alert(`Failed to add appointment: ${error.response.data.message || 'Please try again.'}`);
        } else if (error.request) {
          // The request was made but no response was received
          alert('No response from server. Please check your connection.');
        } else {
          // Something happened in setting up the request
          alert('Error: ' + error.message);
        }
        console.error('Error:', error);
      } finally {
        setIsSubmitting(false); // Reset submitting state after the request is complete
      }
    }
  };

  return (
    <div>
      <h2>Add Appointment</h2>
      <form onSubmit={handleSubmit}>
        {/* Patient Name Input */}
        <div>
          <label>Patient Name: </label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Enter patient name"
            required
          />
          {/* Show validation error for patient name */}
          {errors.patientName && <p style={{ color: 'red' }}>{errors.patientName}</p>}
        </div>

        {/* Appointment Date Input */}
        <div>
          <label>Appointment Date: </label>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]} // Limit to today's or future dates
            required
          />
          {/* Show validation error for appointment date */}
          {errors.appointmentDate && <p style={{ color: 'red' }}>{errors.appointmentDate}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Add Appointment'}
        </button>
      </form>
    </div>
  );
};

export default AppointmentDetails;
