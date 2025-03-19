import React, { useState } from 'react';

function MarksGrades() {
  const [marks, setMarks] = useState([
    { id: 1, student: 'John Doe', marks: 85, grade: 'A' },
    { id: 2, student: 'Jane Smith', marks: 72, grade: 'B' },
    { id: 3, student: 'Alice Johnson', marks: 90, grade: 'A+' },
    { id: 4, student: 'Ramya Behar', marks: 68, grade: 'B' },
    { id: 5, student: 'Praveen Don', marks: 75, grade: 'B' },
    { id: 6, student: 'Dolly Singh', marks: 60, grade: 'C' },
    { id: 7, student: 'Janavi', marks: 55, grade: 'C' },
    { id: 8, student: 'Harshita Sharma', marks: 40, grade: 'D' },
    { id: 9, student: 'Pradeep Singh', marks: 72, grade: 'B' },
    { id: 10, student: 'Ravi Kiran', marks: 72, grade: 'B' },
    { id: 11, student: 'Aitdya Reddy', marks: 75, grade: 'B' },
    { id: 12, student: 'Srvaeen Reddy', marks: 65, grade: 'C+' },
  ]);

  return (
    <div className="marks-grades-container">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((record) => (
            <tr key={record.id}>
              <td>{record.student}</td>
              <td>{record.marks}</td>
              <td>{record.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarksGrades;