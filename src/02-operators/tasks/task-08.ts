/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const prevMeter: number = 25640;
const curMeter: number = 25892;
const priceKwh: number = 1650;
const hasSolarPanel: boolean = true;
const energySaveMode: boolean = false;

const energyCons: number = curMeter - prevMeter;
const electricityBill: number = energyCons * priceKwh;

const solarDiscount: number = hasSolarPanel ? electricityBill * 0.2 : 0;
const energySavingDiscount: number = energySaveMode ? electricityBill * 0.05 : 0;
const totalDiscount: number = solarDiscount + energySavingDiscount;

const finalBill: number = electricityBill - totalDiscount;

const isGreenEnergyEligible: boolean =
  hasSolarPanel && energyCons < 300 && energySaveMode;


console.log("Energy Consumption (kWh):", energyCons);
console.log("Electricity Bill:", electricityBill);
console.log("Solar Discount:", solarDiscount);
console.log("Energy Saving Discount:", energySavingDiscount);
console.log("Total Discount:", totalDiscount);
console.log("Final Bill:", finalBill);
console.log("Green Energy Program Eligible:", isGreenEnergyEligible);
