/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: { name: string; major: string; active: boolean }[]): number {
  let count = 0;
  for (const student of students) {
    if (student.active) {
      count++;
    }
  }
  return count;
}

function countInactiveStudents(students: { name: string; major: string; active: boolean }[]): number {
  let count = 0;
  for (const student of students) {
    if (!student.active) {
      count++;
    }
  }
  return count;


}

function countStudentsByMajor(students: { name: string; major: string; active: boolean }[], major: string): number {
  let count = 0;
  for (const student of students) {
    if (student.major === major) {
      count++;
    }
  }
  return count;
}


function printEnrollmentReport(students: { name: string; major: string; active: boolean }[]) {
  const totalStudents = students.length;
  const activeStudents = countActiveStudents(students);
  const inactiveStudents = countInactiveStudents(students);
  const softwareEngineeringStudents = countStudentsByMajor(students, "Software Engineering");
  const networkingStudents = countStudentsByMajor(students, "Networking");
  const multimediaStudents = countStudentsByMajor(students, "Multimedia");

  console.log("Enrollment Report:");
  console.log(`Total Students: ${totalStudents}`);
  console.log(`Active Students: ${activeStudents}`);
  console.log(`Inactive Students: ${inactiveStudents}`);
  console.log(`Software Engineering Students: ${softwareEngineeringStudents}`);
  console.log(`Networking Students: ${networkingStudents}`);
  console.log(`Multimedia Students: ${multimediaStudents}`);
}