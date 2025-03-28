import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AttendancePage from './pages/AttendancePage';
import AssignmentPage from './pages/AssignmentPage';
import MarksPage from './pages/MarksPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './components/Dashboard';
import ClassDetailsPage from './pages/ClassDetailsPage';
import AttendanceReportPage from './pages/AttendanceReportPage';
import AssignmentsReportPage from './pages/AssignmentsReportPage';
import GradesReportPage from './pages/GradesReportPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router basename='/myapp'>
      <div className="app-container">
        {isLoggedIn && <Navbar onLogout={handleLogout} />}
        <div className="content-container">
          <Routes>
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/class/:classId"
              element={
                isLoggedIn ? <ClassDetailsPage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/attendance"
              element={
                isLoggedIn ? <AttendancePage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/assignments"
              element={
                isLoggedIn ? <AssignmentPage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/marks"
              element={isLoggedIn ? <MarksPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/attendance-report"
              element={
                isLoggedIn ? <AttendanceReportPage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/assignments-report"
              element={
                isLoggedIn ? <AssignmentsReportPage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/grades-report"
              element={
                isLoggedIn ? <GradesReportPage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/"
              element={
                isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;