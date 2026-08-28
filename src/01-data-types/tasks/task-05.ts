/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type employee = {
    emploID: string;
    emploName: string;
    date: number;
    checkIn: string;
    checkOut: string;
    total: string;
    isActive: boolean;

}

const Employee1: employee = {
    emploID: "0980",
    emploName: "john",
    date: 17,
    checkIn: "19:00",
    checkOut: "04:00",
    total: "9 Hours",
    isActive: true,

}

const employee2: employee = {
    emploID: "0970",
    emploName: "Koley",
    date: 18,
    checkIn: "05:00",
    checkOut: "16:00",
    total: "11 Hours",
    isActive: true,

}

const employee3= {
    emploID: "0960",
    emploName: "Hans",
    date: 18,
    checkIn: "16:00",
    checkOut: "19:00",
    totalWork: "2 Hours",
    isActive: true,

}

console.log(Employee1);
console.log("--------------------------------------------------");
console.log(employee2);
console.log("--------------------------------------------------");
console.log(employee3);
console.log("--------------------------------------------------");