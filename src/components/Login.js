import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && password) {
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
            } else {
                alert('Your account has been successfully logged in!');
                navigate('/home');
            }
        } else {
            alert('Please enter both email and password.');
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Log In</div>
                <div className="welcome">Welcome</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input
                        type="email"
                        aria-label="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <input
                        type="password"
                        aria-label="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>    
            </div>
            <div className='options'>
                <div className='remember'>
                    <input type="checkbox" /> Remember Me
                </div>
                <div className="forgot-password">
                    Forget Password? <p className="p1">Click Here!</p>
                </div>
            </div>
            <div className="submit-container">
                <button className="submit1" onClick={handleLogin}>Log In</button>
            </div>
            <div className="login-footer">
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
}

export default Login;
