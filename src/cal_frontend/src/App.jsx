import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';
import Page1 from './Pages/Page1';
// Import the other pages...

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <div className='text'>HELLO</div> */}
        <div className="content">
          <LandingPage/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/page1" element={<Page1 />} />
            {/* Add routes for the other pages */}
            {/* <Route path="/page10" element={<Page10 />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
