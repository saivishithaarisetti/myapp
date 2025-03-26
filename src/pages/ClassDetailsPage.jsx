import React from 'react';
import { useParams } from 'react-router-dom';
import SideNav from '../components/SideNav';
import '../styles.css';

const ClassDetailsPage = () => {
  const { classId } = useParams();

  const students = [
    { id: 1, name: 'John Doe', section: 'A', fee: 'pending' },
    { id: 2, name: 'Jane Smith', section: 'B', fee: 'paid' },
    { id: 3, name: 'Alice Johnson', section: 'C', fee: 'paid' },
    { id: 4, name: 'Bob Brown', section: 'A', fee: 'pending' },
    { id: 5, name: 'Charlie Davis', section: 'B', fee: 'paid' },
    { id: 6, name: 'David Clark', section: 'C', fee: 'pending' },
    { id: 7, name: 'Eve Lee', section: 'A', fee: 'paid' },
    { id: 8, name: 'Frank Martinez', section: 'B', fee: 'pending' },
    { id: 9, name: 'Grace Hall', section: 'C', fee: 'paid' },
    { id: 10, name: 'Henry Young', section: 'A', fee: 'pending' },
    { id: 11, name: 'Isabel Scott', section: 'B', fee: 'paid' },
    { id: 12, name: 'Jack Wright', section: 'C', fee: 'pending' },
    { id: 13, name: 'Kelly King', section: 'A', fee: 'paid' },
    { id: 14, name: 'Liam Adams', section: 'B', fee: 'pending' },
  ];

  return (
    <div className="class-details-container">
      <SideNav />
      <div className="class-details-content">
        <h1>Class {classId} Student Details</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Fee Due</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.fee}</td>
                  <td>{student.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassDetailsPage;