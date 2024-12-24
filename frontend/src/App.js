// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './Home/Home.js';
import StudyRoom from './components/StudyRoom.js';


// const Home = () => <div>Home Page</div>;
// const StudyRoom = () => <div>Study Room</div>;
// const MyWork = () => <div>My Work</div>;
// const DailyTasks = () => <div>Daily Tasks</div>;
// const Profile = () => <div>Your Profile</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          {
           <Route path="/study-room" element={<StudyRoom />} />
          /*<Route path="/mywork" element={<MyWork />} />
          <Route path="/daily-tasks" element={<DailyTasks />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        </>
      </div>
    </Router>
  );
};

export default App;
