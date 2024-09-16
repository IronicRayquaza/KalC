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
          <h1>Satyam</h1>
        </div>

        {/* Right side - Menu options */}
        <div className="navbar-links">
          <ul>
            <li className="dropdown">
              <Link to="/calculate">Calculate</Link>
              <div className="dropdown-content">
                <Link to="/page1">Option 1</Link>
                <Link to="/page2">Option 2</Link>
                <Link to="/page3">Option 3</Link>
                <Link to="/page4">Option 4</Link>
                <Link to="/page5">Option 5</Link>
                <Link to="/page6">Option 6</Link>
                <Link to="/page7">Option 7</Link>
                <Link to="/page8">Option 8</Link>
                <Link to="/page9">Option 9</Link>
                <Link to="/page10">Option 10</Link>
              </div>
            </li>
            <li><Link to="/code">Code</Link></li>
            <li><Link to="/discord">Discord</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

