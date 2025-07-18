import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/dashboard.css";

const Dashboard = () => {
    const [user, setUser] = useState('');
    const [studentInfo, setStudentInfo] = useState({
        rollNumber: '',
        year: '',
        branch: '',
        batch: '',
        gpa: {
            sem1: '',
            sem2: '',
            sem3: '',
            sem4: '',
            sem5: '',
            sem6: '',
            sem7: '',
            sem8: ''
        }
    });
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('username') || '';
        setUser(username);

        // Fetch student info if username is available
        if (username) {
            fetch(`http://localhost:5000/api/studentInfo/${username}`)
                .then(response => response.json())
                .then(data => setStudentInfo(data))
                .catch(error => console.error('Error fetching student info:', error));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/login');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('gpa')) {
            const sem = name.split('.')[1];
            setStudentInfo(prevState => ({
                ...prevState,
                gpa: {
                    ...prevState.gpa,
                    [sem]: value
                }
            }));
        } else {
            setStudentInfo(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = localStorage.getItem('username') || '';

        fetch('http://localhost:5000/api/studentInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, ...studentInfo })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Student info saved:', data);
            alert('Student info saved successfully!');
        })
        .catch(error => console.error('Error saving student info:', error));
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
                        onClick={() => navigate('/landing')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <ul className="sidebar-menu">
                    <li className='active'><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/my-profile">My Profile</Link></li>
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

            {/* Main Content */}
            <div className="main-content">
                <div className="dashboard-content">
                    <h1>Welcome, {user}!</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Roll Number:</label>
                            <input
                                type="text"
                                name="rollNumber"
                                value={studentInfo.rollNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Year:</label>
                            <input
                                type="text"
                                name="year"
                                value={studentInfo.year}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Branch:</label>
                            <input
                                type="text"
                                name="branch"
                                value={studentInfo.branch}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Batch:</label>
                            <input
                                type="text"
                                name="batch"
                                value={studentInfo.batch}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Semester-wise GPA:</label>
                            <div>
                                <label>Sem 1:</label>
                                <input
                                    type="text"
                                    name="gpa.sem1"
                                    value={studentInfo.gpa.sem1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Sem 2:</label>
                                <input
                                    type="text"
                                    name="gpa.sem2"
                                    value={studentInfo.gpa.sem2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Sem 3:</label>
                                <input
                                    type="text"
                                    name="gpa.sem3"
                                    value={studentInfo.gpa.sem3}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Sem 4:</label>
                                <input
                                    type="text"
                                    name="gpa.sem4"
                                    value={studentInfo.gpa.sem4}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Sem 5:</label>
                                <input
                                    type="text"
                                    name="gpa.sem5"
                                    value={studentInfo.gpa.sem5}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Sem 6:</label>
                                <input
                                    type="text"
                                    name="gpa.sem6"
                                    value={studentInfo.gpa.sem6}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Sem 7:</label>
                                <input
                                    type="text"
                                    name="gpa.sem7"
                                    value={studentInfo.gpa.sem7}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Sem 8:</label>
                                <input
                                    type="text"
                                    name="gpa.sem8"
                                    value={studentInfo.gpa.sem8}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit">Save Info</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;