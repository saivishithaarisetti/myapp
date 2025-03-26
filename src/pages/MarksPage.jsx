import React from 'react';
import MarksGrades from '../components/MarksGrades';
import SideNav from '../components/SideNav';
import '../styles.css';

function MarksPage() {
  return (
    <div className="marks-container">
      <SideNav />
      <div className="marks-content">
        <h1>Marks and Grades</h1>
        <div className="marks-table-container">
          <MarksGrades />
        </div>
      </div>
    </div>
  );
}

export default MarksPage;