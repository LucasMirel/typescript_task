/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

const submissionCount = {
    submitted: 0,
    notSubmitted: 0,
    passed: 0,
    mustRevise: 0,
    notSubmittedStudents: [] as string[],
    mustReviseStudents: [] as string[],
    totalScore: 0
};

for (const submission of submissions) {
    submissionCount.totalScore += submission.score;
    if (submission.submitted) {
        submissionCount.submitted++;
        if (submission.score >= 75) {
            submissionCount.passed++;
        } else {
            submissionCount.mustRevise++;
            submissionCount.mustReviseStudents.push(submission.student);
        }
    } else {
        submissionCount.notSubmitted++;
        submissionCount.notSubmittedStudents.push(submission.student);
    }
}

const classAverage = submissionCount.totalScore / submissions.length;

console.log("");
console.log("=== Assignment Submission Report ===");
console.log(`Submitted Assignments: ${submissionCount.submitted}`);
console.log(`Not Submitted: ${submissionCount.notSubmitted}`);
console.log(`Passed: ${submissionCount.passed}`);
console.log(`Must Revise: ${submissionCount.mustRevise}`);
console.log(`Students Who Did Not Submit: ${submissionCount.notSubmittedStudents.join(", ")}`);
console.log(`Students Who Must Revise: ${submissionCount.mustReviseStudents.join(", ")}`);
console.log(`Class Average Score: ${classAverage}`);