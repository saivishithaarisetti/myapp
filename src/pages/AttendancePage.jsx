import React from 'react';
import Attendance from '../components/Attendance';
import SideNav from '../components/SideNav';
import '../styles.css';

function AttendancePage() {
  return (
    <div className="attendance-page">
      <SideNav />
      <div className="content">
        <h1>Attendance</h1>
        <Attendance />
      </div>
    </div>
  );
}

export default AttendancePage;