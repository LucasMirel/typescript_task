/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

type Applicant = {
    name: string;
    monthlyInc: number;
    creditScore: number;
    debt: number;
    isPermanent: boolean;

}

const applicant: Applicant = {
    name: "Andi Wijaya",
    monthlyInc: 10000000,
    creditScore: 725,
    debt: 2500000,
    isPermanent: true,

}
console.log("===Applicant Information===")
console.log("\nApplicant Name : "+applicant.name)
console.log("Monthly Income : "+applicant.monthlyInc)
console.log("Credit Score : "+applicant.creditScore)
console.log("Existing Debt : "+applicant.debt)
console.log("Permanent Employee : "+applicant.isPermanent)

if (applicant.monthlyInc >= 8000000 && applicant.creditScore >= 700) {
    if (applicant.debt <= 0.3 * applicant.monthlyInc && applicant.isPermanent) {
        console.log("Loan Approved")
    } else {
        console.log("Manual Review")
    }
} else {
    console.log("Loan Rejected")
}