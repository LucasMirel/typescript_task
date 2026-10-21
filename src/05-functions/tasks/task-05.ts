/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let highestScore = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
    }
  }
  return highestScore;
}

function findLowestScore(scores: number[]): number {
  let lowestScore = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < lowestScore) {
      lowestScore = scores[i];
    }
  }
  return lowestScore;
}


function calculateAverage(scores: number[]): number {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

function countPassedStudents(scores: number[]): number {
  let passedStudents = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      passedStudents++;
    }
  }
  return passedStudents;
}

function displayReport(scores: number[]): void {
  const highestScore = findHighestScore(scores);
  const lowestScore = findLowestScore(scores);
  const averageScore = calculateAverage(scores);
  const passedStudents = countPassedStudents(scores);

  console.log("Attendance Report:");
  console.log(`Highest Score: ${highestScore}`);
  console.log(`Lowest Score: ${lowestScore}`);
  console.log(`Average Score: ${averageScore.toFixed(2)}`);
  console.log(`Number of Passed Students: ${passedStudents}`);
}
