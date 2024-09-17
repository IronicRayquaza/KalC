import React, { useState } from 'react';
import './Page1.css';

const Page6 = () => {
  const [activeTime, setActiveTime] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [dutyCycle, setDutyCycle] = useState(null);

  // Duty Cycle Calculation
  const calculateDutyCycle = (e) => {
    e.preventDefault();
    if (!activeTime || !totalTime || totalTime <= 0) {
      alert('Please fill out all fields and ensure total time is greater than 0.');
      return;
    }

    const cycle = (activeTime / totalTime) * 100;
    setDutyCycle(cycle.toFixed(2));
  };

  return (
    <div className="page-container">
      <hwhy>KALC WAS EXPOSED?</hwhy>
      <h1>Duty Cycle Calculator</h1>

      <div className="calculator">
        {/* <h2>Calculate Duty Cycle for IoT Devices</h2> */}
        <form onSubmit={calculateDutyCycle}>
          <div className="input-group">
            <label>Active Time (seconds):</label>
            <input
              type="number"
              value={activeTime}
              onChange={(e) => setActiveTime(e.target.value)}
              placeholder="e.g. 30"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Total Time (seconds):</label>
            <input
              type="number"
              value={totalTime}
              onChange={(e) => setTotalTime(e.target.value)}
              placeholder="e.g. 100"
              step="0.01"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
        {dutyCycle !== null && (
          <div className="result">
            <h3>Duty Cycle: {dutyCycle}%</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page6;
