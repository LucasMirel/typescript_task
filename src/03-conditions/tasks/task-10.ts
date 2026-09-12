/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

// Type Definition
type Student = {
  studentName: string;
  isActive: boolean;
  tuitionPaid: boolean;
  passedProgrammingFundamentals: boolean;
  passedDatabaseSystems: boolean;
  gpa: number;
  seatsAvailable: boolean;
}

const nadia: Student = {
  studentName: "Nadia Putri",
  isActive: true,
  tuitionPaid: true,
  passedProgrammingFundamentals: true,
  passedDatabaseSystems: true,
  gpa: 3.45,
  seatsAvailable: false,
}

let result: string;

if (nadia.isActive) {
  if (nadia.tuitionPaid) {
    if (nadia.passedProgrammingFundamentals) {
      if (nadia.passedDatabaseSystems) {
        if (nadia.gpa >= 3.20) {
          if (nadia.seatsAvailable) {
            result = "Registration Successful";
          } else {
            result = "Added to Waiting List";
          }
        } else {
          result = "Academic Requirements Not Met";
        }
      } else {
        result = "Academic Requirements Not Met";
      }
    } else {
      result = "Academic Requirements Not Met";
    }
  } else {
    result = "Registration Rejected";
  }
} else {
  result = "Registration Rejected";
}

console.log('=== Student Information ===')
console.log(`Student Name: `+nadia.studentName);
console.log(`Registration Result: `+result);