import React, { useState } from 'react';
import axios from 'axios';

function AddStudent() {
  const [form, setForm] = useState({ name: '', rollNumber: '', class: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/students', form);
    alert('✅ Student Added');
    setForm({ name: '', rollNumber: '', class: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Student</h4>
      <input className="form-control mb-2" placeholder="Name"
        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="form-control mb-2" placeholder="Roll Number"
        value={form.rollNumber} onChange={(e) => setForm({ ...form, rollNumber: e.target.value })} />
      <input className="form-control mb-2" placeholder="Class"
        value={form.class} onChange={(e) => setForm({ ...form, class: e.target.value })} />
      <button className="btn btn-success">Add</button>
    </form>
  );
}

export default AddStudent;
