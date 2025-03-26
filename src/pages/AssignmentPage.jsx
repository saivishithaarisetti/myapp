import React from 'react';
import Assignment from '../components/Assignment';
import SideNav from '../components/SideNav';
import '../styles.css';

function AssignmentPage() {
  return (
    <div className="assignment-container">
      <SideNav />
      <div className="assignment-content">
        <h1>Assignment Status</h1>
        <div className="assignment-table-container">
          <Assignment />
        </div>
      </div>
    </div>
  );
}

export default AssignmentPage;