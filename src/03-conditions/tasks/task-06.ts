/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

type Patient = {
    patientName : string;
    condition : boolean;
    appointment : boolean;
    age : number;
    insurance : boolean;

}

const patient: Patient = {
    patientName : "Siti Rahma",
    condition : false,
    appointment : true,
    age : 67,
    insurance : true,

}
console.log("Patient Information")
console.log("\nPatient Name : "+patient.patientName)
console.log("Critical Condition : "+patient.condition)
console.log("Has Appointment : "+patient.appointment)
console.log("Age : "+patient.age)
console.log("Has Insurance : "+patient.insurance)

if (patient.condition) {
    console.log("Patient " + patient.patientName + " is assigned to the Emergency Room.");
}

else if (patient.appointment) {
    if (patient.age >= 60) {
        console.log("Patient " + patient.patientName + " is assigned to the Priority Queue.");
    } else {
        console.log("Patient " + patient.patientName + " is assigned to the Regular Queue.");
    }
} else {
    if (patient.insurance) {
        console.log("Patient " + patient.patientName + " is assigned to the Insurance Registration Counter.");
    } else {
        console.log("Patient " + patient.patientName + " is assigned to the General Registration Counter.");
    }
}