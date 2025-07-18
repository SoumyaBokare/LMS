import '../styles/announcements.css';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Announcements = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/announcements')
            .then(response => response.json())
            .then(data => setAnnouncements(data))
            .catch(error => console.error('Error fetching announcements:', error));
    }, []);

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/landing');
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const handlePostAnnouncement = () => {
        if (title.trim() && message.trim()) {
            const newAnnouncement = {
                title,
                content: message
            };

            fetch('http://localhost:5000/api/announcements', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAnnouncement)
            })
            .then(response => response.json())
            .then(data => {
                setAnnouncements([...announcements, data]);
                setTitle('');
                setMessage('');
            })
            .catch(error => console.error('Error posting announcement:', error));
        }
    };

    const handleDeleteAnnouncement = (id) => {
        fetch(`http://localhost:5000/api/announcements/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setAnnouncements(announcements.filter(announcement => announcement._id !== id));
        })
        .catch(error => console.error('Error deleting announcement:', error));
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
                    <li><Link to="/my-profile">My Profile</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/lessons">Lessons</Link></li>
                    <li><Link to="/assessments">Assessments</Link></li>
                    <li><Link to="/challenges">Challenges</Link></li>
                    <li className='active'><Link to="/announcement">Announcement</Link></li>
                </ul>
                <div className="logout-button">
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>

            {/* Announcements Page Content */}
            <div className="announcements-page">
                <h1>Announcements</h1>
                <div className="announcement-form">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Announcement Title"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your announcement here..."
                        rows="4"
                    />
                    <button onClick={handlePostAnnouncement}>Post Announcement</button>
                </div>

                <h2>Recent Announcements</h2>
                {announcements.map((announcement) => (
                    <div key={announcement._id} className="announcement-item">
                        <h3>{announcement.title}</h3>
                        <p>{announcement.content}</p>
                        <p className="announcement-date">Posted on: {new Date(announcement.date).toLocaleDateString()}</p>
                        <button onClick={() => handleDeleteAnnouncement(announcement._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;