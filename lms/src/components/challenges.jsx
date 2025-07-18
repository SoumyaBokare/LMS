import '../styles/challenges.css';
import { useNavigate, Link } from 'react-router-dom';

const Challenges = () => {
    const challenges = [
        {
            title: "Data Science Challenge",
            description: "Build a predictive model using a given dataset and evaluate its accuracy.",
            dueDate: "November 15, 2024",
            requirements: [
                "Use any machine learning framework (e.g., scikit-learn, TensorFlow).",
                "Submit a Jupyter Notebook with your findings.",
                "Include visualizations to support your analysis."
            ]
        },
        {
            title: "Web Development Challenge",
            description: "Create a responsive website for a non-profit organization using HTML, CSS, and JavaScript.",
            dueDate: "November 22, 2024",
            requirements: [
                "Ensure the website is mobile-friendly.",
                "Implement a contact form.",
                "Deploy the website on GitHub Pages or Vercel."
            ]
        },
        {
            title: "Hackathon Challenge",
            description: "Participate in a 24-hour hackathon to develop a prototype for a social good project.",
            dueDate: "December 1, 2024",
            requirements: [
                "Form a team of 3-5 members.",
                "Submit a project presentation along with the code repository.",
                "Innovate a solution to a problem faced by your community."
            ]
        },
        {
            title: "Mobile App Development Challenge",
            description: "Develop a mobile application that helps users track their daily habits.",
            dueDate: "November 30, 2024",
            requirements: [
                "Use React Native or Flutter for development.",
                "Include user authentication.",
                "Implement notifications to remind users."
            ]
        },
        {
            title: "Cybersecurity Challenge",
            description: "Conduct a security audit of a web application and report vulnerabilities.",
            dueDate: "December 5, 2024",
            requirements: [
                "Use tools like OWASP ZAP or Burp Suite.",
                "Provide a detailed report with recommendations.",
                "Simulate attacks ethically."
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
                    <li><Link to="/assessments">Assessments</Link></li>
                    <li className='active'><Link to="/challenges">Challenges</Link></li>
                    <li><Link to="/announcement">Announcement</Link></li>
                </ul>
                <div className="logout-button">
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>

            {/* Challenges Page Content */}
            <div className="challenges-page">
                <h1>Challenges</h1>
                {challenges.map((challenge, index) => (
                    <div key={index} className="challenge-item">
                        <h2>{challenge.title}</h2>
                        <p>{challenge.description}</p>
                        <p><strong>Due Date:</strong> {challenge.dueDate}</p>
                        <h3>Requirements:</h3>
                        <ul>
                            {challenge.requirements.map((requirement, idx) => (
                                <li key={idx}>{requirement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Challenges;