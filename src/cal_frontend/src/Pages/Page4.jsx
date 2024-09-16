import React, { useState } from 'react';
import './Page1.css';

const Page4 = () => {
  const [inputVoltage, setInputVoltage] = useState('');
  const [referenceVoltage, setReferenceVoltage] = useState('');
  const [resolution, setResolution] = useState('');
  const [digitalValue, setDigitalValue] = useState(null);

  // ADC Calculator
  const calculateADC = (e) => {
    e.preventDefault();
    if (!inputVoltage || !referenceVoltage || !resolution) {
      alert('Please fill out all fields.');
      return;
    }
    
    const maxDigitalValue = Math.pow(2, resolution) - 1;
    const calculatedDigitalValue = (inputVoltage / referenceVoltage) * maxDigitalValue;
    setDigitalValue(Math.round(calculatedDigitalValue));
  };

  return (
    <div className="page-container">
      <h1>ADC Calculator</h1>

      <div className="calculator">
        <h2>Analog to Digital Converter (ADC) Calculation</h2>
        <form onSubmit={calculateADC}>
          <div className="input-group">
            <label>Input Voltage (V):</label>
            <input
              type="number"
              value={inputVoltage}
              onChange={(e) => setInputVoltage(e.target.value)}
              placeholder="e.g. 1.5"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Reference Voltage (V):</label>
            <input
              type="number"
              value={referenceVoltage}
              onChange={(e) => setReferenceVoltage(e.target.value)}
              placeholder="e.g. 3.3"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Resolution (bits):</label>
            <input
              type="number"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              placeholder="e.g. 10"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
        {digitalValue !== null && (
          <div className="result">
            <h3>Digital Value: {digitalValue}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page4;

