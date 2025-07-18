import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import "../styles/landing.css";

const Landing = () => {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoClick = () => {
        navigate('/landing');
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
                        onClick={handleLogoClick}
                        style={{ cursor: 'pointer' }}
                    />
                    <button className="logout button-30">LOGOUT Google</button>
                </div>
                <div className="navbar-actions">
                    
                    <button className="login-button button-30" onClick={handleLoginClick}>Log In</button>
                </div>
            </nav>

            {/* College hero */}
            <div className="clg-hero">
                <div className="college-image">
                    <img src={("../../public/clg.png")} alt="College" className="college-img" />
                </div>
                <div className="somaiya-container">
                    {/* <img src={("../../public/somaiya.png")} alt="Somaiya img" className="somaiya-img" /> */}
                    <div className="welcome-text">
                        <h1>Welcome to LMS </h1>
                        <div className="highlights">
                            <Card className="highlight-card">
                                <Card.Body>
                                <Card.Img variant="top" src={("../../public/info.png")} className="info-img" />
                                    <Card.Text>
                                        Get comprehensive information for all your academic needs.
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="highlight-card">
                                <Card.Body>
                                <Card.Img variant="top" src={("../../public/graph.png")} className="graph-img" />
                                    <Card.Text>
                                        Visualize your performance with detailed statistics.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="highlight-card library">
                                <Card.Body>
                                <Card.Img variant="top" src={("../../public/library.png")} className="library-img" />
                                    <Card.Text>
                                        Get access to a wide range of courses and resources.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARDS */}
            <h2 className="heads">Our Vision</h2>
<Container className="mt-5">
    <Row>
        <Col md={4} sm={12}>
            <Card className="text-center card">
                <Card.Body className="card-body">
                    <Card.Title>Empowering Education</Card.Title>
                    <Card.Text>
                        Our vision is to create a learning ecosystem that nurtures innovation, curiosity, and continuous growth. We strive to equip students with the knowledge and skills needed to excel in their academic journey and beyond.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4} sm={12}>
            <Card className="text-center card">
                <Card.Body className="card-body">
                    <Card.Title>Transforming Knowledge</Card.Title>
                    <Card.Text>
                        By leveraging cutting-edge technologies and comprehensive resources, we aim to transform the traditional learning experience, making it more engaging, insightful, and personalized for every learner.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4} sm={12}>
            <Card className="text-center card">
                <Card.Body className="card-body">
                    <Card.Title>Fostering Growth</Card.Title>
                    <Card.Text>
                        We envision a future where students can effortlessly track their progress, overcome challenges, and cultivate both academic and personal growth, supported by a strong learning management system.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

<hr></hr>
<hr></hr>

           

            {/* FOOTER */}
            <footer className="footer">
                <p>© 2018-24 KJSCE, All Rights Reserved.</p>
                <button className="go-to-top-button" onClick={scrollToTop}>↑</button>
            </footer>
        </div>
    );
};

export default Landing;