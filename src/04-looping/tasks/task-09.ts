/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

const gradeCounts = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};

let highestScore = -Infinity;
let lowestScore = Infinity;
let totalScore = 0;

for (const student of students) {
    const { score } = student;
    totalScore += score;

    if (score >= 90) {
        gradeCounts.A++;
    } else if (score >= 80) {
        gradeCounts.B++;
    } else if (score >= 70) {
        gradeCounts.C++;
    } else {
        gradeCounts.D++;
    }

    if (score > highestScore) {
        highestScore = score;
    }

    if (score < lowestScore) {
        lowestScore = score;
    }
}

const averageScore = totalScore / students.length;

console.log("");
console.log("=== Grade Report ===");
console.log(`A Students: ${gradeCounts.A}`);
console.log(`B Students: ${gradeCounts.B}`);
console.log(`C Students: ${gradeCounts.C}`);
console.log(`D Students: ${gradeCounts.D}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore}`);