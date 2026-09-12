/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

type Machine = {
    powerOn : boolean;
    temp : number;
    highVibration : boolean;
    productionSpeed : number;

}

const machine : Machine = {
    powerOn : true,
    temp : 95,
    highVibration : false,
    productionSpeed : 92,

}

console.log("=== Machine Status ===")
if (machine.powerOn == true) {
    console.log("Machine Online")

}
else {
    console.log("Machine Offline")
}

if (machine.temp >= 90) {
    if (machine.highVibration === true) {
    console.log("Emergency Shutdown")
    }
    else {
        console.log("Cooling required")
    }
}
else {
    console.log("Cooling required")
}

if (machine.temp <= 90) {
    if(machine.productionSpeed < 80) {
        console.log("Machine operating normaly")
    }
    else {
        console.log("Performance warning")
    }
}

else {
    console.log("Machine operating normaly")
}