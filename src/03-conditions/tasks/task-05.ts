/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

type StudentInfo = {
    studentName : string;
    gpa : number;
    familyInc : number
    competitionCount : number;
    disciplinaryRecord : boolean;
    documentComplete : boolean;
}

const student: StudentInfo = {
    studentName : "Fajar Hidayat",
    gpa : 3.86,
    familyInc : 4200000,
    competitionCount : 4,
    disciplinaryRecord : false,
    documentComplete : true,
    
}

console.log("Student Information")
console.log("\nStudent Name : "+student.studentName)
console.log("GPA : "+student.gpa)
console.log("Family Income : "+student.familyInc)
console.log("Competition Count : "+student.competitionCount)
console.log("Disciplinary Record : "+student.disciplinaryRecord)
console.log("Document Complete : "+student.documentComplete)

if (student.gpa >= 3.75 && student.familyInc < 5000000) {
    if (student.competitionCount >= 3 && student.disciplinaryRecord === false && student.documentComplete === true) {
        console.log("\nScholarship Approved")
    } else {
        console.log("\nPassed First Screening, but Failed Second Screening")
    }
} else {
    console.log("\nFailed First Screening")
}