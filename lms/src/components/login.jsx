import { useGoogleLogin } from '@react-oauth/google';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../styles/login.css";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse);
            navigate('/dashboard'); // Navigate to the dashboard after successful login
        },
        flow: 'auth-code',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        // Check for multiple sets of credentials
        if (username === 'soumya.bokare@somaiya.edu' && password === '12345678') {
            localStorage.setItem('username', 'Soumya');
            logUserLogin('Soumya');
            navigate('/dashboard');
        } else if (username === 'student2@example.com' && password === 'password2') {
            localStorage.setItem('username', 'Kavya');
            logUserLogin('Kavya');
            navigate('/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    const logUserLogin = (username) => {
        fetch('http://localhost:5000/api/logins', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })
        .then(response => response.json())
        .then(data => console.log('User login logged:', data))
        .catch(error => console.error('Error logging user login:', error));
    };

    return (
        <div>
            {/* NAVBAR */}
            <nav className="navbar">
                <div className="navbar-brand">
                    <img
                        alt="College Logo"
                        src={("../../public/clg_icon.jpg")}
                        className="navbar-logo"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/landing')}
                    />
                    <button className="logout button-30">LOGOUT Google</button>
                </div>
                <div className="navbar-actions">
                    <button className="search-button button-30">
                        <FaSearch />
                    </button>
                </div>
            </nav>

            <div className="login-page">
                <div className="login-box">
                    <h2>Log in</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username / email</label>
                        <input type="text" id="username" name="username" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                        <div className="remember-me">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Remember password</label>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button type="submit" className="login button-30">Log in</button>
                            <p className="forgot-password">Forgotten your username or password?</p>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                    <div className="first-time-box">
                        {/* <h2>Is this your first time here?</h2> */}
                        <div className="google-login">
                            <h6>Log in using your account on:</h6>
                            <button className="login-with-google-btn" onClick={() => login()}>Login with Somaiya Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;