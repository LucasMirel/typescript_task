/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
    return patients.length;
}

function countAdmittedPatients(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
    let count = 0;
    for (const patient of patients) {
        if (patient.admitted) {
            count++;
        }
    }
    return count;
}

function countDischargedPatients(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
    let count = 0;
    for (const patient of patients) {
        if (!patient.admitted) {
            count++;
        }
    }
    return count;
}

function countPatientsByDepartment(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[], department: string): number {
    let count = 0;
    for (const patient of patients) {
        if (patient.department === department) {
            count++;
        }
    }
    return count;
}

function findHighestBill(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
    let highestBill = patients[0].bill;
    for (const patient of patients) {
        if (patient.bill > highestBill) {
            highestBill = patient.bill;
        }
    }
    return highestBill;
}

function findLowestBill(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
    let lowestBill = patients[0].bill;
    for (const patient of patients) {
        if (patient.bill < lowestBill) {
            lowestBill = patient.bill;
        }
    }
    return lowestBill;
}

function calculateAverageBill(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
    let totalBill = 0;
    for (const patient of patients) {
        totalBill += patient.bill;
    }
    return patients.length > 0 ? totalBill / patients.length : 0;
}

function calculateTotalRevenue(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
    let totalRevenue = 0;
    for (const patient of patients) {
        totalRevenue += patient.bill;
    }
    return totalRevenue;
}

function getAdmittedPatientNames(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): string[] {
    const admittedNames: string[] = [];
    for (const patient of patients) {
        if (patient.admitted) {
            admittedNames.push(patient.name);
        }
    }
    return admittedNames;
}

function printHospitalReport(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): void {
    const totalPatients = countTotalPatients(patients);
    const admittedPatients = countAdmittedPatients(patients);
    const dischargedPatients = countDischargedPatients(patients);
    const pediatricsCount = countPatientsByDepartment(patients, "Pediatrics");
    const cardiologyCount = countPatientsByDepartment(patients, "Cardiology");
    const orthopedicsCount = countPatientsByDepartment(patients, "Orthopedics");
    const highestBill = findHighestBill(patients);
    const lowestBill = findLowestBill(patients);
    const averageBill = calculateAverageBill(patients);
    const totalRevenue = calculateTotalRevenue(patients);
    const admittedNames = getAdmittedPatientNames(patients);

    console.log("Hospital Report:");
    console.log(`Total Patients: ${totalPatients}`);
    console.log(`Total Admitted Patients: ${admittedPatients}`);
    console.log(`Total Discharged Patients: ${dischargedPatients}`);
    console.log(`Patients in Pediatrics: ${pediatricsCount}`);
    console.log(`Patients in Cardiology: ${cardiologyCount}`);
    console.log(`Patients in Orthopedics: ${orthopedicsCount}`);
    console.log(`Highest Hospital Bill: ${highestBill}`);
    console.log(`Lowest Hospital Bill: ${lowestBill}`);
    console.log(`Average Hospital Bill: ${averageBill.toFixed(2)}`);
    console.log(`Total Hospital Revenue: ${totalRevenue}`);
    console.log(`Names of Admitted Patients: ${admittedNames.join(", ")}`);
}
