import React, { useState } from 'react';
import './Page1.css';  // Keep the CSS file name as needed
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const Page1 = () => {
  const [batteryCapacity, setBatteryCapacity] = useState('');
  const [currentConsumption, setCurrentConsumption] = useState('');
  const [dutyCycle, setDutyCycle] = useState('');
  const [batteryLife, setBatteryLife] = useState(null);

  const calculateBatteryLife = (e) => {
    e.preventDefault();
    if (!batteryCapacity || !currentConsumption || !dutyCycle) {
      alert('Please fill out all fields.');
      return;
    }

    const adjustedConsumption = (currentConsumption * dutyCycle) / 100;
    const lifeInHours = batteryCapacity / adjustedConsumption;
    setBatteryLife(lifeInHours.toFixed(2));
  };

  return (
    <div className="calculator-container">
        {/* <NavBar/> */}
      <h1>IoT Power Consumption Calculator</h1>
      <form onSubmit={calculateBatteryLife} className="calculator-form">
        <div className="input-group">
          <label>Battery Capacity (mAh):</label>
          <input
            type="number"
            value={batteryCapacity}
            onChange={(e) => setBatteryCapacity(e.target.value)}
            placeholder="e.g. 3000"
          />
        </div>

        <div className="input-group">
          <label>Current Consumption (mA):</label>
          <input
            type="number"
            value={currentConsumption}
            onChange={(e) => setCurrentConsumption(e.target.value)}
            placeholder="e.g. 500"
          />
        </div>

        <div className="input-group">
          <label>Duty Cycle (%):</label>
          <input
            type="number"
            value={dutyCycle}
            onChange={(e) => setDutyCycle(e.target.value)}
            placeholder="e.g. 75"
          />
        </div>

        <button type="submit" className="calculate-btn">Calculate</button>
      </form>

      {batteryLife && (
        <div className="result">
          <h2>Estimated Battery Life: {batteryLife} hours</h2>
        </div>
      )}
      {/* <Footer/> */}
    </div>
  );
};

export default Page1;

