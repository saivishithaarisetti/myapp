import React from 'react';
import Attendance from '../components/Attendance';
import SideNav from '../components/SideNav';
import '../styles.css';

function AttendancePage() {
  return (
    <div className="attendance-container">
      <SideNav />
      <div className="attendance-content">
        <h1>Attendance</h1>
        <div className="attendance-table-container">
          <Attendance />
        </div>
      </div>
    </div>
  );
}

export default AttendancePage;