import React, { useState } from 'react';
import './Page1.css';

const Page4 = () => {
  const [dataSize, setDataSize] = useState('');
  const [networkSpeed, setNetworkSpeed] = useState('');
  const [latency, setLatency] = useState(null);

  // Latency Calculator
  const calculateLatency = (e) => {
    e.preventDefault();
    if (!dataSize || !networkSpeed) {
      alert('Please fill out all fields.');
      return;
    }
    
    const calculatedLatency = (dataSize * 8) / networkSpeed; // Latency in seconds
    setLatency(calculatedLatency.toFixed(4));
  };

  return (
    <div className="page-container">
      <hwhy>KALC WAS EXPOSED?</hwhy>
      <h1>Latency Calculator</h1>

      <div className="calculator">
        {/* <h2>Estimate Communication Latency</h2> */}
        <form onSubmit={calculateLatency}>
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
            <label>Network Speed (Kbps):</label>
            <input
              type="number"
              value={networkSpeed}
              onChange={(e) => setNetworkSpeed(e.target.value)}
              placeholder="e.g. 500"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
        {latency && (
          <div className="result">
            <h3>Estimated Latency: {latency} seconds</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page4;
