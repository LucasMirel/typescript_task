/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */

type ExamResult = {
    scores: number[];
    totalScore: number;
    averageScore: number;
    passingCount: number;
    failingCount: number;
}

const examResult: ExamResult = {
    scores: [82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76],
    totalScore: 0,
    averageScore: 0,
    passingCount: 0,
    failingCount: 0
};

for (let i = 0; i < examResult.scores.length; i++) {
    const score = examResult.scores[i];
    examResult.totalScore += score;
    if (score >= 75) {
        examResult.passingCount++;
    } else {
        examResult.failingCount++;
    }
}

examResult.averageScore = examResult.totalScore / examResult.scores.length;

console.log("")
console.log("=== Exam Result ===");
console.log(`Total Score: ${examResult.totalScore}`);
console.log(`Average Score: ${examResult.averageScore.toFixed(2)}`);
console.log(`Passing Students: ${examResult.passingCount}`);
console.log(`Failing Students: ${examResult.failingCount}`);