import '../styles/my-profile.css';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const MyProfile = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [forumMessages, setForumMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(localStorage.getItem('username') || ''); // Retrieve the username from local storage

        fetch('http://localhost:5000/api/announcements')
            .then(response => response.json())
            .then(data => setAnnouncements(data))
            .catch(error => console.error('Error fetching announcements:', error));

        const fetchForumMessages = () => {
            fetch('http://localhost:5000/api/forumMessages')
                .then(response => response.json())
                .then(data => setForumMessages(data))
                .catch(error => console.error('Error fetching forum messages:', error));
        };

        fetchForumMessages();
        const intervalId = setInterval(fetchForumMessages, 5000); // Poll every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/landing');
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const handlePostMessage = () => {
        if (username.trim() && message.trim()) {
            const newMessage = {
                username,
                message
            };

            fetch('http://localhost:5000/api/forumMessages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newMessage)
            })
            .then(response => response.json())
            .then(data => {
                setForumMessages([data, ...forumMessages]);
                setUsername('');
                setMessage('');
            })
            .catch(error => console.error('Error posting message:', error));
        }
    };

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-logo">
                    <img
                        alt="College Logo"
                        src={("../../public/clg_icon.jpg")}
                        className="navbar-logo"
                        onClick={handleLogoClick}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li className='active'><Link to="/my-profile">My Profile</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/lessons">Lessons</Link></li>
                    <li><Link to="/assessments">Assessments</Link></li>
                    <li><Link to="/challenges">Challenges</Link></li>
                    <li><Link to="/announcement">Announcement</Link></li>
                </ul>
                <div className="logout-button">
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>

            {/* Profile Page Content */}
            <div className="profile-page">
                <h1>My Profile</h1>
                <h2>Welcome, {user}!</h2>
                {/* Other profile content */}

                <div className="faculty-mails card">
                    <h2>Faculty Mails</h2>
                    <p>No new mails.</p>
                </div>

                <div className="messages card">
                    <h2>Messages</h2>
                    {announcements.length === 0 ? (
                        <p>No new messages.</p>
                    ) : (
                        announcements.map((announcement) => (
                            <div key={announcement._id} className="announcement-item">
                                <h3>{announcement.title}</h3>
                                <p>{announcement.content}</p>
                                <p className="announcement-date">Posted on: {new Date(announcement.date).toLocaleDateString()}</p>
                            </div>
                        ))
                    )}
                </div>

                <div className="forums card">
                    <h2>Forums</h2>
                    <div className="forum-messages">
                        {forumMessages.map((msg) => (
                            <div key={msg._id} className="forum-message">
                                <strong>{msg.username}</strong>: {msg.message}
                                <p className="forum-date">{new Date(msg.date).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                    <div className="forum-input">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your name"
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            rows="2"
                        />
                        <button onClick={handlePostMessage}>Post Message</button>
                    </div>
                </div>

                <div className="settings card">
                    <h2>Settings</h2>
                    <p>Change password</p>
                    <p>Change name</p>
                    <p>Deactivate mail</p>
                    <p>Forum preference</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;