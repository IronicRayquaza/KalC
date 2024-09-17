import React, { useState } from 'react';
import './Page1.css';

const Page5 = () => {
  const [dataTransmission, setDataTransmission] = useState('');
  const [dataProcessing, setDataProcessing] = useState('');
  const [dataStorage, setDataStorage] = useState('');
  const [totalCost, setTotalCost] = useState(null);

  // Cloud Cost Estimator Calculation
  const calculateCost = (e) => {
    e.preventDefault();
    if (!dataTransmission || !dataProcessing || !dataStorage) {
      alert('Please fill out all fields.');
      return;
    }
    
    // Basic cost assumptions for cloud services
    const transmissionCostPerGB = 0.12;  // Cost per GB for data transmission
    const processingCostPerUnit = 0.02;  // Cost per unit for data processing
    const storageCostPerGB = 0.023;      // Cost per GB for storage

    const estimatedCost = (
      (dataTransmission * transmissionCostPerGB) +
      (dataProcessing * processingCostPerUnit) +
      (dataStorage * storageCostPerGB)
    );

    setTotalCost(estimatedCost.toFixed(2));
  };

  return (
    <div className="page-container">
      <hwhy>KALC WAS EXPOSED?</hwhy>
      <h1>Cloud Cost Estimator</h1>

      <div className="calculator">
        {/* <h2>Estimate Cloud Service Costs</h2> */}
        <form onSubmit={calculateCost}>
          <div className="input-group">
            <label>Data Transmission (GB):</label>
            <input
              type="number"
              value={dataTransmission}
              onChange={(e) => setDataTransmission(e.target.value)}
              placeholder="e.g. 100"
            />
          </div>
          <div className="input-group">
            <label>Data Processing (Units):</label>
            <input
              type="number"
              value={dataProcessing}
              onChange={(e) => setDataProcessing(e.target.value)}
              placeholder="e.g. 1000"
            />
          </div>
          <div className="input-group">
            <label>Data Storage (GB):</label>
            <input
              type="number"
              value={dataStorage}
              onChange={(e) => setDataStorage(e.target.value)}
              placeholder="e.g. 50"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
        {totalCost !== null && (
          <div className="result">
            <h3>Estimated Monthly Cost: ${totalCost}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page5;
