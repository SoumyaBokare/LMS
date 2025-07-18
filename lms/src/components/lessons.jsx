import '../styles/lessons.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Lessons = () => {
    const subjects = [
        "Information Theory",
        "Automation and Control Systems",
        "Theory of Automata",
        "Computer Organization and Architecture",
        "Data Science and Analytics"
    ];

    const lessons = [
        {
            subject: "Information Theory",
            lessons: [
                {
                    title: "Lesson 1: Introduction to Information Theory",
                    description: "Explore the basic concepts of information theory, including entropy, mutual information, and channel capacity.",
                    progress: "Completed",
                },
                {
                    title: "Lesson 2: Hamming Bound",
                    description: "Understand the Hamming Bound and its significance in error detection and correction in coding theory.",
                    progress: "Started",
                },
                {
                    title: "Lesson 3: Entropy and Data Compression",
                    description: "Dive into the concept of entropy and how it relates to data compression techniques like Huffman coding and Shannon-Fano coding.",
                    progress: "Not Started",
                }
            ]
        },
        {
            subject: "Automation and Control Systems",
            lessons: [
                {
                    title: "Lesson 2: Coding Techniques",
                    description: "Understand various coding techniques such as Huffman coding, and error-correcting codes like Hamming code.",
                    progress: "In Progress"
                },
                {
                    title: "Lesson 2: Hamming Bound",
                    description: "Understand the Hamming Bound and its significance in error detection and correction in coding theory.",
                    progress: "Not Started",
                }
            ]
        },
        {
            subject: "Theory of Automata",
            lessons: [
                {
                    title: "Lesson 3: Channel Encoding",
                    description: "Learn about different channel encoding methods and how they ensure reliable transmission of data.",
                    progress: "Not Started"
                },
                {
                    title: "Lesson 2: Hamming Bound",
                    description: "Understand the Hamming Bound and its significance in error detection and correction in coding theory.",
                    progress: "Not Started",
                }
            ]
        },
        {
            subject: "Computer Organization and Architecture",
            lessons: [
                {
                    title: "Lesson 4: Error Detection and Correction",
                    description: "Study the principles of error detection and correction, focusing on parity checks and CRC.",
                    progress: "In Progress"
                },
                {
                    title: "Lesson 2: Hamming Bound",
                    description: "Understand the Hamming Bound and its significance in error detection and correction in coding theory.",
                    progress: "Not Started",
                }
            ]
        },
        {
            subject: "Data Science and Analytics",
            lessons: [
                {
                    title: "Lesson 5: Advanced Coding Techniques",
                    description: "Explore advanced topics in coding, including Turbo codes and LDPC codes used in modern communications.",
                    progress: "Not Started"
                },
                {
                    title: "Lesson 2: Hamming Bound",
                    description: "Understand the Hamming Bound and its significance in error detection and correction in coding theory.",
                    progress: "Not Started",
                }
            ]
        }
    ];

    const location = useLocation();
    const [selectedSubject, setSelectedSubject] = useState(location.state?.selectedSubject || subjects[0]);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/landing');
    };

    const handleLogout = () => {
        // Add your logout logic here
        navigate('/login');
    };

    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
    };

    const filteredLessons = lessons.find(lesson => lesson.subject === selectedSubject)?.lessons || [];

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
                    <li className='active'><Link to="/lessons">Lessons</Link></li>
                    <li><Link to="/assessments">Assessments</Link></li>
                    <li><Link to="/challenges">Challenges</Link></li>
                    <li><Link to="/announcement">Announcement</Link></li>
                </ul>
                <div className="logout-button">
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <div className="lessons-page">
                <h1>Subjects</h1>
                <select value={selectedSubject} onChange={handleSubjectChange}>
                    {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                    ))}
                </select>
                <div className="lessons-list">
                    {filteredLessons.map((lesson, index) => (
                        <div key={index} className="lesson-item">
                            <h2>{lesson.title}</h2>
                            <p>{lesson.description}</p>
                            <p><strong>Progress:</strong> {lesson.progress}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lessons;