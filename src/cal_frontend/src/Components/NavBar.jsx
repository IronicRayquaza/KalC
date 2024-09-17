import React from 'react';
import './NavBar.css'; // Importing the CSS for the nav bar
import { Link } from 'react-router-dom';
import Page1 from '../Pages/Page1';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side - Name */}
        <div className="navbar-logo">
          <h1>KALC</h1>
        </div>

        {/* Right side - Menu options */}
        <div className="navbar-links">
          <ul>
            <li className="dropdown">
              <Link to="/page1">Calculators</Link>
              <div className="dropdown-content">
                <Link to="/page1">Battery Life</Link>
                <Link to="/page2">Communication Latency</Link>
                <Link to="/page3">Required Bandwidth</Link>
                <Link to="/page4">ADC Calculator</Link>
                <Link to="/page5">Cloud Service Costs</Link>
                <Link to="/page6">Duty Cycle</Link>
                <Link to="/page7">Sensor Data</Link>
                <Link to="/page8">Signal Strength</Link>
                <Link to="/page9">Optimal Battery Size</Link>
                <Link to="/page10">Processing Power</Link>
              </div>
            </li>
            <li><Link to="https://github.com/IronicRayquaza/KalC">Code</Link></li>
            <li><Link to="https://discord.gg/sxvdN2SYCf">Discord</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

