import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import '../styles.css';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const AttendanceReportPage = () => {
  const navigate = useNavigate();
  const chartRef = useRef(null);

  // Dummy data for attendance report
  const data = {
    labels: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    datasets: [
      {
        label: 'Attendance Percentage',
        data: [85, 90, 78, 92, 88, 95, 80, 85, 90, 87],
        backgroundColor: 'rgba(52, 152, 219, 0.6)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

   // Destroy the chart on unmount
   useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="report-page">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        &#8592; Back to Dashboard
      </button>
      <h1>📊 Attendance Report</h1>
      <div className="report-content">
        <div className="graph-container">
          <Bar data={data} options={options} />
          <p>Monthly Report</p>
        </div>
        <div className="summary-container">
          <h2>Summary</h2>
          <ul>
            {data.labels.map((label, index) => (
              <li key={index}>
                {label}: {data.datasets[0].data[index]}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReportPage;