import React from 'react';
import Assignment from '../components/Assignment';
import SideNav from '../components/SideNav';
import '../styles.css';

function AssignmentPage() {
  return (
    <div className="assignment-page">
      <SideNav />
      <div className="content">
        <h1>Assignment Status</h1>
        <Assignment />
      </div>
    </div>
  );
}

export default AssignmentPage;