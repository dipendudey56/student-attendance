import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MarkAttendance() {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState('');
  const [status, setStatus] = useState('Present');

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data));
  }, []);

  const mark = async () => {
    if (!selected) return alert('Please select a student');
    await axios.post('http://localhost:5000/api/attendance', {
      student: selected,
      status
    });
    alert('✅ Attendance marked');
  };

  return (
    <div>
      <h4>Mark Attendance</h4>
      <select className="form-control mb-2" onChange={(e) => setSelected(e.target.value)}>
        <option value="">-- Select Student --</option>
        {students.map(stu => (
          <option key={stu._id} value={stu._id}>{stu.name} ({stu.rollNumber})</option>
        ))}
      </select>
      <select className="form-control mb-2" onChange={(e) => setStatus(e.target.value)}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      <button className="btn btn-warning" onClick={mark}>Submit</button>
    </div>
  );
}

export default MarkAttendance;
