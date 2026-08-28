/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

const Name: string = "Alya Putri";
const gpa: number = 3.89;
const familyInc: number = 4200000;
const compCount: number = 4;
const hasDiscRec: boolean = false;
const docsComp: boolean = true;

const meetGpa: boolean = gpa >= 3.75;
const meetInc: boolean = familyInc < 5000000;
const meetComp: boolean = compCount >= 3;
const meetDisc: boolean = hasDiscRec === false;
const meetDocs: boolean = docsComp === true;

const isQualified: boolean =
  meetGpa && meetInc && meetComp && meetDisc && meetDocs;

const scholAmount: number = isQualified ? 12000000 : 0;
const totalBudget: number = 500000000;
const remainBudget: number = totalBudget - scholAmount;

console.log(`Student Name: ${Name}`);
console.log(`GPA: ${gpa} (>= 3.75 required) -> ${meetGpa}`);
console.log(`Family Income: Rp${familyInc.toLocaleString("id-ID")} (< Rp5,000,000 required) -> ${meetInc}`);
console.log(`Competition Count: ${compCount} (>= 3 required) -> ${meetComp}`);
console.log(`No Disciplinary Record: ${meetDisc}`);
console.log(`Documents Complete: ${meetDocs}`);
console.log(`Is Qualified: ${isQualified}`);
console.log(`Scholarship Amount: Rp${scholAmount.toLocaleString("id-ID")}`);
console.log(`Remaining Scholarship Budget: Rp${remainBudget.toLocaleString("id-ID")}`);
