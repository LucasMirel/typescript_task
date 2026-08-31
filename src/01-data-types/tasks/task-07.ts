/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

/**
 * An online learning platform allows students to register for programming courses.
 * Every registration stores information about both the student and the selected course.
 */

// Object student setups
type Student = {
  studentID: string;
  fullName: string;
  grade: number;
}


// Object Course setups
type Course = {
  courseID: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
}

// Object Registration setups
type Registration = {
  student: Student;
  course: Course;
  registrationDate: string; 
  isPaymentCompleted: boolean;
}

// Registration full
const registrations: Registration[] = [

// Student 1#
  {
    student: {
      studentID: "STU001",
      fullName: "Alya Rahmawati",
      grade: 10,
    },
    course: {
      courseID: "CRS101",
      courseTitle: "Introduction to JavaScript",
      instructorName: "Budi Santoso",
      totalLearningHours: 20,
    },
    registrationDate: "2026-08-01",
    isPaymentCompleted: true,
  },

// Student 2#
  {
    student: {
      studentID: "STU002",
      fullName: "Rizky Maulana",
      grade: 11,
    },
    course: {
      courseID: "CRS102",
      courseTitle: "TypeScript Fundamentals",
      instructorName: "Siti Nurhaliza",
      totalLearningHours: 25,
    },
    registrationDate: "2026-08-15",
    isPaymentCompleted: false,
  },

// Student 3#
  {
    student: {
      studentID: "STU003",
      fullName: "Dewi Lestari",
      grade: 12,
    },
    course: {
      courseID: "CRS103",
      courseTitle: "Advanced React Development",
      instructorName: "Andi Wijaya",
      totalLearningHours: 30,
    },
    registrationDate: "2026-08-20",
    isPaymentCompleted: true,
  },
]

// Output Registration sets
registrations.forEach((registration, index) => {
  console.log(`Registration #${index + 1}`);
  console.log(registration);
  console.log("--------------------------------------------------");
})