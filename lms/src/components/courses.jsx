import '../styles/courses.css';
import { useNavigate, Link } from 'react-router-dom';

const Courses = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/landing');
    };

    const handleLogout = () => {
        // Add your logout logic here
        navigate('/login');
    };

    const handleCourseClick = (subject) => {
        navigate('/lessons', { state: { selectedSubject: subject } });
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
                    <li className='active'><Link to="/courses">Courses</Link></li>
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
            <div className="dashboard-content">
                {/* Header */}
                <div className="header">
                    <h1>Welcome, Soumya</h1>
                    <p>TY EXCP B1: 16014022014</p>
                </div>

                {/* Recent Enrolled Courses */}
                <div className="recent-courses">
                    <h2>In Progress</h2>
                    <div className="course-item" onClick={() => handleCourseClick("Information Theory")}>
                        <h3>Information Theory and Coding Techniques</h3>
                        <p>4/10 Lessons</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '40%' }}></div>
                        </div>
                    </div>
                    <div className="course-item">
                        <h3>Web Programming Lab</h3>
                        <p>2/10 Writeups</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '20%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Course Overview */}
                <div className="course-overview">
                    <h2>Course Overview</h2>
                    <div className="course-overview-grid">
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Automation and Control Systems")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Automation and Control Systems</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Analog and Digital Communication")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Analog and Digital Communication</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Information Theory")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Information Theory and Coding Techniques</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Web Programming Lab")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Web Programming Lab</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Theory of Automata")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Theory of Automata</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Data Analytics")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Data Analytics</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Information Theory and Coding Techniques Lab")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Information Theory and Coding Techniques Lab</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Mini Project Lab")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Mini Project Lab</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Automation and Control Systems Lab")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Automation and Control Systems Lab</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("Analog and Digital Communication Lab")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>Analog and Digital Communication Lab</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("ITCT")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>ITCT</h3>
                        </div>
                        <div className="class-item course-overview-item" onClick={() => handleCourseClick("WPL")}>
                            <img src="https://via.placeholder.com/150" alt="Course" />
                            <h3>WPL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;