/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

type Passanger = {
    name : string;
    onlineCheck : boolean;
    cabinClass : boolean;
    baggageWeight : number;
}

const passanger: Passanger = {
    name : "Fajar Nugroho",
    onlineCheck : true,
    cabinClass : false,
    baggageWeight : 24,

}

console.log("Passanger Information")
console.log("\nPassanger Name : "+passanger.name)
console.log("Online Chack-in : "+passanger.onlineCheck)
console.log("Cabin Class : "+passanger.cabinClass)
console.log("Baggage Weight : "+passanger.baggageWeight)

if (passanger.onlineCheck == true) {
}
else {
    console.log("Please complete online check-in first.")
}

if (passanger.baggageWeight > 20) {
    if (passanger.cabinClass) {
        console.log("Baggage weight exceeds capacity for " + passanger.name + ". Business class are allowed to bring extra weight.")
    } else {
        console.log("Baggage weight exceeds capacity for " + passanger.name + ". Baggage Fee are needed for Economy class.")
    }
} 
else {}
