const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const records = await Attendance.find().populate("student");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
