import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import StudentList from './pages/StudentList';
import MarkAttendance from './pages/MarkAttendance';
import AttendanceList from './pages/AttendanceList';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2>📘 Student Attendance System</h2>
        <nav className="mb-3">
          <Link to="/" className="btn btn-primary me-2">Students</Link>
          <Link to="/add" className="btn btn-success me-2">Add Student</Link>
          <Link to="/mark" className="btn btn-warning me-2">Mark Attendance</Link>
          <Link to="/records" className="btn btn-info">View Records</Link>
        </nav>

        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/mark" element={<MarkAttendance />} />
          <Route path="/records" element={<AttendanceList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
