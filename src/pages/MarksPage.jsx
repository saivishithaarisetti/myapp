import React from 'react';
import MarksGrades from '../components/MarksGrades';
import SideNav from '../components/SideNav';
import '../styles.css';

function MarksPage() {
  return (
    <div className="marks-page">
      <SideNav />
      <div className="content">
        <h1>Marks and Grades</h1>
        <MarksGrades />
      </div>
    </div>
  );
}

export default MarksPage;