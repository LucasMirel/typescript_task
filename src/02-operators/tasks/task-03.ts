/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const Name: string = "Dimas";
const Salary: number = 5000000;
const overtime: number = 12;
const Rate: number = 50000;

const overtimePay: number = overtime*Rate;
const bonus: number = overtime > 10 ? 300000 : 0;
const finalSalary: number = Salary + overtimePay + bonus;

console.log(`Employee Name: ${Name}`);
console.log(`Basic Salary: Rp${Salary.toLocaleString("id-ID")}`);
console.log(`Overtime Hours: ${overtime} x Rp${Rate.toLocaleString("id-ID")} = Rp${overtimePay.toLocaleString("id-ID")}`);
console.log(`Bonus: Rp${bonus.toLocaleString("id-ID")} ${overtime > 10 ? "(overtime > 10 hours)" : "(no bonus)"}`);
console.log(`Final Salary: Rp${finalSalary.toLocaleString("id-ID")}`);
console.log(`Final Salary: Rp${finalSalary.toLocaleString("id-ID")}`);
