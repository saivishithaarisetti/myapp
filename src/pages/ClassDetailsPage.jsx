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
  ];

  return (
    <div className="class-details-page">
      <SideNav />
      <div className="content">
        <h1>Class {classId} Student Details</h1>
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
  );
};

export default ClassDetailsPage;