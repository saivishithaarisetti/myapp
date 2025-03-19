import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

function SideNav({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="sidenav">
      <div className="sidenav-header">
      </div>
      <ul>
        <li><Link to="/dashboard"> DashBoard</Link></li>
        <li><Link to="/attendance">📊 Attendance</Link></li>
        <li><Link to="/assignments">📚 Assignments</Link></li>
        <li><Link to="/marks">🎓 Marks & Grades</Link></li>
        <li>
          <button onClick={handleLogout}>🚪 Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;