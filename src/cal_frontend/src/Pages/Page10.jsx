import React, { useState } from 'react';
import './Page1.css';

const Page10 = () => {
  const [taskDuration, setTaskDuration] = useState('');
  const [cpuUtilization, setCpuUtilization] = useState('');
  const [numTasks, setNumTasks] = useState('');
  const [requiredCpuLoad, setRequiredCpuLoad] = useState(null);

  // CPU Load Calculation
  const calculateCpuLoad = (e) => {
    e.preventDefault();
    if (!taskDuration || !cpuUtilization || !numTasks) {
      alert('Please fill out all fields.');
      return;
    }

    // Calculate CPU load (percentage) based on task duration, CPU utilization, and number of tasks
    const load = (parseFloat(taskDuration) * parseFloat(numTasks)) / parseFloat(cpuUtilization);
    setRequiredCpuLoad(load.toFixed(2));
  };

  return (
    <div className="page-container">
      <hwhy>KALC WAS EXPOSED?</hwhy>
      <h1>CPU Load and Performance Calculator</h1>

      <div className="calculator">
        {/* <h2>Calculate Processing Power Requirements for IoT Devices</h2> */}
        <form onSubmit={calculateCpuLoad}>
          <div className="input-group">
            <label>Task Duration (ms):</label>
            <input
              type="number"
              value={taskDuration}
              onChange={(e) => setTaskDuration(e.target.value)}
              placeholder="e.g. 50"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>CPU Utilization (%):</label>
            <input
              type="number"
              value={cpuUtilization}
              onChange={(e) => setCpuUtilization(e.target.value)}
              placeholder="e.g. 80"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label>Number of Tasks:</label>
            <input
              type="number"
              value={numTasks}
              onChange={(e) => setNumTasks(e.target.value)}
              placeholder="e.g. 10"
              step="1"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
        {requiredCpuLoad !== null && (
          <div className="result">
            <h3>Required CPU Load: {requiredCpuLoad} %</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page10;
