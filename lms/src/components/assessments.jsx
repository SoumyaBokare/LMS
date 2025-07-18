import '../styles/assessment.css';
import { useNavigate, Link } from 'react-router-dom';

const Assessments = () => {
    const assessments = [
        {
            subject: "Information Theory",
            results: [
                {
                    quiz: "Quiz 1: Entropy and Mutual Information",
                    score: "85%",
                    feedback: "Good understanding of the concepts but needs improvement in channel capacity questions.",
                },
                {
                    quiz: "Quiz 2: Data Compression Techniques",
                    score: "90%",
                    feedback: "Excellent performance with strong grasp on Huffman coding and lossless compression.",
                }
            ]
        },
        {
            subject: "Automation and Control Systems",
            results: [
                {
                    quiz: "Quiz 1: PID Controllers",
                    score: "78%",
                    feedback: "Needs more practice with PID tuning and control system fundamentals.",
                },
                {
                    quiz: "Quiz 2: State Space Analysis",
                    score: "82%",
                    feedback: "Solid understanding of state-space representation, but slight errors in matrix calculations.",
                }
            ]
        },
        {
            subject: "Theory of Automata",
            results: [
                {
                    quiz: "Quiz 1: Regular Expressions and Languages",
                    score: "88%",
                    feedback: "Strong grasp on regular expressions, but minor mistakes in finite automata.",
                },
                {
                    quiz: "Quiz 2: Pushdown Automata",
                    score: "80%",
                    feedback: "Good understanding of pushdown automata, but needs more clarity on context-free languages.",
                }
            ]
        },
        {
            subject: "Computer Organization and Architecture",
            results: [
                {
                    quiz: "Quiz 1: Instruction Set Architecture",
                    score: "92%",
                    feedback: "Great job! Excellent understanding of RISC and CISC architectures.",
                },
                {
                    quiz: "Quiz 2: Pipelining and Parallelism",
                    score: "87%",
                    feedback: "Good performance on pipeline structure, slight errors in branch prediction.",
                }
            ]
        },
        {
            subject: "Data Science and Analytics",
            results: [
                {
                    quiz: "Quiz 1: Machine Learning Algorithms",
                    score: "94%",
                    feedback: "Excellent work on machine learning basics, particularly in supervised learning.",
                },
                {
                    quiz: "Quiz 2: Data Visualization",
                    score: "89%",
                    feedback: "Very creative data visualization, but minor issues with chart accuracy.",
                }
            ]
        }
    ];

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/landing');
    };

    const handleLogout = () => {
        // Add your logout logic here
        navigate('/login');
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
                    <li className='active'><Link to="/assessments">Assessments</Link></li>
                    <li><Link to="/challenges">Challenges</Link></li>
                    <li><Link to="/announcement">Announcement</Link></li>
                </ul>
                <div className="logout-button">
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <div className="assessments-page">
                <h1>Assessment Results</h1>
                {assessments.map((subject, index) => (
                    <div key={index} className="subject-assessment">
                        <h2>{subject.subject}</h2>
                        <div className="grid-container">
                            {subject.results.map((result, idx) => (
                                <div key={idx} className="grid-item">
                                    <h3>{result.quiz}</h3>
                                    <p><strong>Score:</strong> {result.score}</p>
                                    <p><strong>Feedback:</strong> {result.feedback}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Assessments;