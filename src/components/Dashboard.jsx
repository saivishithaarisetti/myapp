import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClassClick = (classId) => {
    navigate(`/class/${classId}`);
  };

  const handleReportClick = (reportType) => {
    navigate(`/${reportType}`);
  };

  return (
    <div className="dashboard">
      <h1>School Dashboard</h1>
      <div className="dashboard-grid">
        {[...Array(10).keys()].map((i) => (
          <div
            key={i + 1}
            className="class-box"
            onClick={() => handleClassClick(i + 1)}
          >
            <span>Class {i + 1}</span>
            <p>Total no. of Students: {40 + i ** 2}</p>
          </div>
        ))}
      </div>
      <div className="reports-grid">
        <div
          className="report-box attendance-report"
          onClick={() => handleReportClick('attendance-report')}
        >
          <span>📊 Attendance Report</span>
        </div>
        <div
          className="report-box assignments-report"
          onClick={() => handleReportClick('assignments-report')}
        >
          <span>📚 Assignments Report</span>
        </div>
        <div
          className="report-box grades-report"
          onClick={() => handleReportClick('grades-report')}
        >
          <span>🎓 Grades Report</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;