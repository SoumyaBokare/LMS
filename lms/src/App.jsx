
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/login';
import Dashboard from './components/dashboard';
import MyProfile from './components/my-profile';
import Courses from './components/courses';
import Lessons from './components/lessons';
import Assessments from './components/assessments';
import Challenges from './components/challenges';
import Announcement from './components/announcement';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/landing" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/assessments" element={<Assessments />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/announcement" element={<Announcement />} />
            </Routes>
        </Router>
    )
}

export default App;