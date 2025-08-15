import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AttendanceList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/attendance')
      .then(res => setRecords(res.data));
  }, []);

  return (
    <div>
      <h4>Attendance Records</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map(rec => (
            <tr key={rec._id}>
              <td>{rec.student?.name} ({rec.student?.rollNumber})</td>
              <td>{rec.status}</td>
              <td>{new Date(rec.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceList;
