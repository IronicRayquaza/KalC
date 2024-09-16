import React, { useState } from 'react';
import './Page1.css';

const Page3 = () => {
  const [dataSize, setDataSize] = useState('');
  const [transmissionInterval, setTransmissionInterval] = useState('');
  const [bandwidth, setBandwidth] = useState(null);

  // Bandwidth Calculator
  const calculateBandwidth = (e) => {
    e.preventDefault();
    if (!dataSize || !transmissionInterval) {
      alert('Please fill out all fields.');
      return;
    }
    
    const calculatedBandwidth = (dataSize / transmissionInterval) * 8; // Bits per second
    setBandwidth(calculatedBandwidth.toFixed(2));
  };

  return (
    <div className="page-container">
      <h1>Bandwidth Calculator</h1>

      <div className="calculator">
        <h2>Calculate Required Bandwidth</h2>
        <form onSubmit={calculateBandwidth}>
          <div className="input-group">
            <label>Data Size (KB):</label>
            <input
              type="number"
              value={dataSize}
              onChange={(e) => setDataSize(e.target.value)}
              placeholder="e.g. 100"
            />
          </div>
          <div className="input-group">
            <label>Transmission Interval (seconds):</label>
            <input
              type="number"
              value={transmissionInterval}
              onChange={(e) => setTransmissionInterval(e.target.value)}
              placeholder="e.g. 60"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
        {bandwidth && (
          <div className="result">
            <h3>Required Bandwidth: {bandwidth} bits/sec</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page3;
