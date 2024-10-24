import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name && email && password && confirmPassword && phoneNumber && age) {
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
            } else if (!/^\d{10}$/.test(phoneNumber)) {
                alert('Phone number must be exactly 10 digits and numeric.');
            } else if (password !== confirmPassword) {
                alert('Passwords do not match!');
            } else {
                alert('Your account has been created!');
                navigate('/home');
            }
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="welcome">You're Most Welcome!</div>
            </div>
            <div className="inputs">
                <div className="upperbound">Name</div>
                <div className="input">
                    <input
                        type="text"
                        aria-label="name"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="upperbound">Email ID</div>
                <div className="input">
                    <input
                        type="email"
                        aria-label="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="upperbound">Contact Number</div>
                <div className="input">
                    <input
                        type="tel"
                        aria-label="phone number"
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="upperbound">Age</div>
                <div className="input">
                    <input
                        type="number"
                        aria-label="age"
                        placeholder='Age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="upperbound">Password</div>
                <div className="input">
                    <input
                        type="password"
                        aria-label="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="upperbound">Confirm Password</div>
                <div className="input">
                    <input
                        type="password"
                        aria-label="confirm password"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className='forget'>
                <input type="checkbox" />By creating an account, you agree to our Terms and Privacy policy
            </div>
            <div className="create-account-section">
                <button className="signup-button" onClick={handleSignup}>Sign Up</button>
            </div>
            <div className="signup-footer">
                <p>Already have an account? <a href="/login">Log In</a></p>
            </div>
        </div>
    );
}

export default Signup;
