import React, { useState } from 'react';
import './Page1.css';

const Page8 = () => {
  const [transmissionPower, setTransmissionPower] = useState('');
  const [transmitterGain, setTransmitterGain] = useState('');
  const [receiverGain, setReceiverGain] = useState('');
  const [pathLoss, setPathLoss] = useState('');
  const [linkBudget, setLinkBudget] = useState(null);

  // RF Link Budget Calculation
  const calculateLinkBudget = (e) => {
    e.preventDefault();
    if (!transmissionPower || !transmitterGain || !receiverGain || !pathLoss) {
      alert('Please fill out all fields.');
      return;
    }

    const budget = parseFloat(transmissionPower) + parseFloat(transmitterGain) + parseFloat(receiverGain) - parseFloat(pathLoss);
    setLinkBudget(budget.toFixed(2));
  };

  return (
    <div className="page-container">
      <hwhy>KALC WAS EXPOSED?</hwhy>
      <h1>RF Link Budget Calculator</h1>

      <div className="calculator">
        {/* <h2>Calculate Signal Strength for IoT Communication</h2> */}
        <form onSubmit={calculateLinkBudget}>
          <div className="input-group">
            <label>Transmission Power (dBm):</label>
            <input
              type="number"
              value={transmissionPower}
              onChange={(e) => setTransmissionPower(e.target.value)}
              placeholder="e.g. 20"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Transmitter Antenna Gain (dBi):</label>
            <input
              type="number"
              value={transmitterGain}
              onChange={(e) => setTransmitterGain(e.target.value)}
              placeholder="e.g. 2"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Receiver Antenna Gain (dBi):</label>
            <input
              type="number"
              value={receiverGain}
              onChange={(e) => setReceiverGain(e.target.value)}
              placeholder="e.g. 3"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Path Loss (dB):</label>
            <input
              type="number"
              value={pathLoss}
              onChange={(e) => setPathLoss(e.target.value)}
              placeholder="e.g. 100"
              step="0.01"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
        {linkBudget !== null && (
          <div className="result">
            <h3>RF Link Budget: {linkBudget} dB</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page8;
