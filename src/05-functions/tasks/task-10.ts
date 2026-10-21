/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function countTotalEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    return enrollments.length;
}

function countCompletedEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.completed) {
            count++;
        }
    }
    return count;
}

function countIncompleteEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let count = 0;
    for (const enrollment of enrollments) {
        if (!enrollment.completed) {
            count++;
        }
    }
    return count;
}

function calculateCompletionPercentage(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    const totalEnrollments = countTotalEnrollments(enrollments);
    const completedEnrollments = countCompletedEnrollments(enrollments);
    return (completedEnrollments / totalEnrollments) * 100;
}

function findHighestScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let highestScore = enrollments[0].score;
    for (const enrollment of enrollments) {
        if (enrollment.score > highestScore) {
            highestScore = enrollment.score;
        }
    }
    return highestScore;
}

function findLowestScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let lowestScore = enrollments[0].score;
    for (const enrollment of enrollments) {
        if (enrollment.score < lowestScore) {
            lowestScore = enrollment.score;
        }
    }
    return lowestScore;
}

function calculateAverageScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let totalScore = 0;
    for (const enrollment of enrollments) {
        totalScore += enrollment.score;
    }
    return enrollments.length > 0 ? totalScore / enrollments.length : 0;
}

function countPassingStudents(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.score >= 75) {
            count++;
        }
    }
    return count;
}

function countStudentsByCourse(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[], course: string): number {
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.course === course) {
            count++;
        }
    }
    return count;
}

function calculateAverageScoreByCourse(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[], course: string): number {
    let totalScore = 0;
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.course === course) {
            totalScore += enrollment.score;
            count++;
        }
    }
    return count > 0 ? totalScore / count : 0;
}

function calculateTotalLearningHours(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let totalHours = 0;
    for (const enrollment of enrollments) {
        totalHours += enrollment.duration;
    }
    return totalHours;
}

function calculateAverageLearningDuration(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    const totalHours = calculateTotalLearningHours(enrollments);
    return enrollments.length > 0 ? totalHours / enrollments.length : 0;
}

function displayDashboard(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): void {
    const totalEnrollments = countTotalEnrollments(enrollments);
    const completedEnrollments = countCompletedEnrollments(enrollments);
    const incompleteEnrollments = countIncompleteEnrollments(enrollments);
    const completionPercentage = calculateCompletionPercentage(enrollments);
    const highestScore = findHighestScore(enrollments);
    const lowestScore = findLowestScore(enrollments);
    const averageScore = calculateAverageScore(enrollments);
    const passingStudents = countPassingStudents(enrollments);
    const totalLearningHours = calculateTotalLearningHours(enrollments);
    const averageLearningDuration = calculateAverageLearningDuration(enrollments);

    console.log("Completion Statistics:");
    console.log(`Total Enrollments: ${totalEnrollments}`);
    console.log(`Completed Enrollments: ${completedEnrollments}`);
    console.log(`Incomplete Enrollments: ${incompleteEnrollments}`);
    console.log(`Completion Percentage: ${completionPercentage.toFixed(2)}%`);
    console.log(`Highest Score: ${highestScore}`);
    console.log(`Lowest Score: ${lowestScore}`);
    console.log(`Average Score: ${averageScore.toFixed(2)}`);
    console.log(`Passing Students: ${passingStudents}`);
    console.log(`Total Learning Hours: ${totalLearningHours}`);
    console.log(`Average Learning Duration: ${averageLearningDuration.toFixed(2)} hours`);
    const courses = Array.from(new Set(enrollments.map(enrollment => enrollment.course)));
    console.log("Course Statistics:");
    for (const course of courses) {
        const studentCount = countStudentsByCourse(enrollments, course);
        const averageScore = calculateAverageScoreByCourse(enrollments, course);
        console.log(`  ${course}: ${studentCount} students, Average Score: ${averageScore.toFixed(2)}`);
    }
}

