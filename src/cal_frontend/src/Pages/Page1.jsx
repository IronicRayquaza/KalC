import React, { useState } from 'react';
import './Page1.css';

const Page1 = () => {
  const [currentConsumption, setCurrentConsumption] = useState('');
  const [batteryCapacity, setBatteryCapacity] = useState('');
  const [dutyCycle, setDutyCycle] = useState('');
  const [batteryLife, setBatteryLife] = useState(null);

  const calculateBatteryLife = () => {
    const current = parseFloat(currentConsumption);
    const capacity = parseFloat(batteryCapacity);
    const duty = parseFloat(dutyCycle) / 100;

    if (isNaN(current) || isNaN(capacity) || isNaN(duty) || current <= 0 || capacity <= 0 || duty < 0 || duty > 1) {
      setBatteryLife('Invalid input values. Please check your inputs.');
      return;
    }

    const life = (capacity / current) * duty;
    setBatteryLife(life.toFixed(2) + ' hours');
  };

  return (
    <div className="page-container">
      <hwhy>KALC WAS EXPOSED?</hwhy>
      <h1>Power Consumption Calculator</h1>
      <div className="calculator">
        {/* <dif>Estimate Battery Life</dif> */}
        <div className="input-group">
          <label htmlFor="current-consumption">Current Consumption (mA):</label>
          <input
            type="number"
            id="current-consumption"
            value={currentConsumption}
            onChange={(e) => setCurrentConsumption(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="battery-capacity">Battery Capacity (mAh):</label>
          <input
            type="number"
            id="battery-capacity"
            value={batteryCapacity}
            onChange={(e) => setBatteryCapacity(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="duty-cycle">Duty Cycle (%):</label>
          <input
            type="number"
            id="duty-cycle"
            value={dutyCycle}
            onChange={(e) => setDutyCycle(e.target.value)}
          />
        </div>
        <button className="calculate-btn" onClick={calculateBatteryLife}>
          Calculate Battery Life
        </button>
        {batteryLife && <div className="result">Estimated Battery Life: {batteryLife}</div>}
      </div>
    </div>
  );
};

export default Page1;
