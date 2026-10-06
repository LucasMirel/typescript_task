/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

const attendanceCount = {
  present: 0,
  absent: 0,
  absentStudents: [] as string[]
};

for (const student of attendances) {
  if (student.present) {
    attendanceCount.present++;
  } else {
    attendanceCount.absent++;
    attendanceCount.absentStudents.push(student.name);
  }
}

console.log("");
console.log("=== Attendance Report ===");
console.log(`Present Students: ${attendanceCount.present}`);
console.log(`Absent Students: ${attendanceCount.absent}`);
console.log(`Absent Students: ${attendanceCount.absentStudents.join(", ")}`);
console.log(`Attendance Percentage: ${(attendanceCount.present / attendances.length) * 100}%`);
