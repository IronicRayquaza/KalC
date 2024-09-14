import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to the IoT Calculator</h1>
        <p>Your go-to tool for managing and optimizing IoT projects</p>
      </header>
      <section className="content">
        <h2>Why Use an IoT Calculator?</h2>
        <p>
          An IoT (Internet of Things) calculator is an essential tool for anyone involved in IoT projects. It helps you manage various parameters and metrics related to your IoT devices and systems. Here’s why it’s crucial:
        </p>
        <ul>
          <li><strong>Cost Estimation:</strong> Calculate the cost of deploying and maintaining IoT devices.</li>
          <li><strong>Data Management:</strong> Optimize data usage and storage requirements.</li>
          <li><strong>Performance Monitoring:</strong> Track and analyze the performance of your IoT network.</li>
          <li><strong>Energy Efficiency:</strong> Estimate and improve the energy consumption of your devices.</li>
        </ul>
        <p>
          By using an IoT calculator, you can make informed decisions, optimize your resources, and ensure the efficiency of your IoT systems.
        </p>
      </section>
      {/* <footer className="footer">
        <p>© 2024 IoT Calculator. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default LandingPage;
