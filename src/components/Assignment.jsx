import React, { useState } from 'react';

function Assignment() {
  const [assignments, setAssignments] = useState({
    student1: { name: 'John Doe', submittedAssignments: 25, pendingAssignments: 5 },
    student2: { name: 'Jane Smith', submittedAssignments: 30, pendingAssignments: 2 },
    student3: { name: 'Alice Johnson', submittedAssignments: 28, pendingAssignments: 4 },
    student4: { name: 'John Doe', submittedAssignments: 20, pendingAssignments: 14 },
    student5: { name: 'Praveen Don', submittedAssignments: 26, pendingAssignments: 9 },
    student6: { name: 'Ramya Behar', submittedAssignments: 32, pendingAssignments: 0 },
    student7: { name: 'Dolly Singh', submittedAssignments: 15, pendingAssignments: 18 },
    student8: { name: 'Janavi', submittedAssignments: 19, pendingAssignments: 15 },
    student9: { name: 'Harshita Sharma', submittedAssignments: 5, pendingAssignments: 26 },
    student10: { name: 'Pradeep Singh', submittedAssignments: 30, pendingAssignments: 2 },
    student11: { name: 'Ravi Kiran', submittedAssignments: 30, pendingAssignments: 2 },
    student13: { name: 'Aitdya Reddy', submittedAssignments: 31, pendingAssignments: 1 },
  });

  return (
    <div className="assignment-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submitted Assignments</th>
            <th>Pending Assignments</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(assignments).map(([studentId, { name, submittedAssignments, pendingAssignments }]) => (
            <tr key={studentId}>
              <td>{name}</td>
              <td>{submittedAssignments}</td>
              <td>{pendingAssignments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assignment;