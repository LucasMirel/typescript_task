/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type student = {
    studentID: string;
    fullName: string;
    age: number;
    isActive: boolean;
}

const studentA = { 
    studentID: "ST09345" ,
    fullName: "Alvi azka" ,
    age: 15 ,
    isActive: true 

}

const studentB = {
    studentID: "ST08990" ,
    fullName: "Dimas rizky" ,
    age: 15 ,
    isActive: false

}

const studentD = {
    studentID: "ST05558" ,
    fullName: "Reno rin" ,
    age: 16 ,
    isActive: true 

}

console.log(studentA);
console.log(studentB);
console.log(studentD);