import React, { useState } from 'react';
import './Page1.css';

const Page7 = () => {
  const [rawValue, setRawValue] = useState('');
  const [referenceValue, setReferenceValue] = useState('');
  const [calibrationFactor, setCalibrationFactor] = useState(null);
  const [calibratedValue, setCalibratedValue] = useState(null);

  // Sensor Calibration Calculation
  const calculateCalibration = (e) => {
    e.preventDefault();
    if (!rawValue || !referenceValue) {
      alert('Please fill out both fields.');
      return;
    }

    const factor = referenceValue / rawValue;
    const calibrated = rawValue * factor;

    setCalibrationFactor(factor.toFixed(4));
    setCalibratedValue(calibrated.toFixed(2));
  };

  return (
    <div className="page-container">
      <hwhy>KALC WAS EXPOSED?</hwhy>
      <h1>Sensor Calibration Calculator</h1>

      <div className="calculator">
        {/* <h2>Calibrate Your Sensor Data</h2> */}
        <form onSubmit={calculateCalibration}>
          <div className="input-group">
            <label>Raw Sensor Value:</label>
            <input
              type="number"
              value={rawValue}
              onChange={(e) => setRawValue(e.target.value)}
              placeholder="e.g. 500"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Reference Value:</label>
            <input
              type="number"
              value={referenceValue}
              onChange={(e) => setReferenceValue(e.target.value)}
              placeholder="e.g. 520"
              step="0.01"
            />
          </div>
          <button type="submit" className="calculate-btn">Calibrate</button>
        </form>
        {calibrationFactor && (
          <div className="result">
            <h3>Calibration Factor: {calibrationFactor}</h3>
            <h3>Calibrated Value: {calibratedValue}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page7;
