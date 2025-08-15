import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data));
  }, []);

  return (
    <div>
      <h4>All Students</h4>
      <ul className="list-group">
        {students.map(stu => (
          <li key={stu._id} className="list-group-item">
            {stu.name} ({stu.rollNumber}) - {stu.class}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
