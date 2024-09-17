import React, { useState } from 'react';
import './Page1.css';

const Page9 = () => {
  const [powerConsumption, setPowerConsumption] = useState('');
  const [batteryLife, setBatteryLife] = useState('');
  const [batterySize, setBatterySize] = useState(null);

  // Battery Size Calculation
  const calculateBatterySize = (e) => {
    e.preventDefault();
    if (!powerConsumption || !batteryLife) {
      alert('Please fill out all fields.');
      return;
    }

    // Battery size formula: capacity (mAh) = power consumption (mA) * battery life (hours)
    const size = parseFloat(powerConsumption) * parseFloat(batteryLife);
    setBatterySize(size.toFixed(2));
  };

  return (
    <div className="page-container">
      <hwhy>KALC WAS EXPOSED?</hwhy>
      <h1>Battery Sizing Calculator</h1>

      <div className="calculator">
        {/* <h2>Calculate Optimal Battery Size for IoT Devices</h2> */}
        <form onSubmit={calculateBatterySize}>
          <div className="input-group">
            <label>Power Consumption (mA):</label>
            <input
              type="number"
              value={powerConsumption}
              onChange={(e) => setPowerConsumption(e.target.value)}
              placeholder="e.g. 50"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Desired Battery Life (hours):</label>
            <input
              type="number"
              value={batteryLife}
              onChange={(e) => setBatteryLife(e.target.value)}
              placeholder="e.g. 1000"
              step="0.01"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
        {batterySize !== null && (
          <div className="result">
            <h3>Required Battery Capacity: {batterySize} mAh</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page9;
