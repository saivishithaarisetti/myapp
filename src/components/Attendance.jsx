import React, { useState } from 'react';

function Attendance() {
  const [attendance, setAttendance] = useState({
    student1: { name: 'John Doe', present: 25, attendancePercentage: 83.33 },
    student2: { name: 'Jane Smith', present: 30, attendancePercentage: 100 },
    student3: { name: 'Alice Johnson', present: 28, attendancePercentage: 93.33 },
    student4: { name: 'Ramay', present: 28, attendancePercentage: 93.33 },
    student5: { name: 'Ravi Kiran', present: 28, attendancePercentage: 93.33 },
    student6: { name: 'Praveen Don', present: 28, attendancePercentage: 93.33 },
    student7: { name: 'Dolly Singh ', present: 28, attendancePercentage: 93.33 },
    student8: { name: 'Janavi', present: 28, attendancePercentage: 93.33 },
    student9: { name: 'Harshita Sharma', present: 28, attendancePercentage: 93.33 },
    student10: { name: 'Pradeep Singh', present: 28, attendancePercentage: 93.33 },
    student11: { name: 'Alice Johnson', present: 28, attendancePercentage: 93.33 },
    student12: { name: 'Aitdya Reddy', present: 20, attendancePercentage: 66.67 },
  });

  return (
    <div className="attendance-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Present</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(attendance).map(([studentId, { name, present, attendancePercentage }]) => (
            <tr key={studentId}>
              <td>{name}</td>
              <td>{present}</td>
              <td>{attendancePercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;