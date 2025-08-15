const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("../models/Students");
const Attendance = require("../models/Attendance");

dotenv.config({ path: "../.env" });
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🟢 Connected to MongoDB"))
  .catch(err => console.error("❌ DB Error:", err));

const mockStudents = [
  { name: "Dipendu Dey", rollNumber: "MCA101", class: "MCA" },
  { name: "Anita Roy", rollNumber: "MCA102", class: "MCA" },
  { name: "Rahul Sen", rollNumber: "MCA103", class: "MCA" },
  { name: "Priya Sharma", rollNumber: "MCA104", class: "MCA" },
  { name: "Amit Verma", rollNumber: "MCA105", class: "MCA" }
];

async function seedData() {
  try {
    await Student.deleteMany({});
    const insertedStudents = await Student.insertMany(mockStudents);
    console.log("✅ Inserted Students");

    const mockAttendance = insertedStudents.map((student, index) => ({
      student: student._id,
      date: new Date(),
      status: index % 2 === 0 ? "Present" : "Absent"
    }));

    await Attendance.deleteMany({});
    await Attendance.insertMany(mockAttendance);
    console.log("✅ Inserted Attendance");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding Error:", error.message);
    process.exit(1);
  }
}

seedData();
