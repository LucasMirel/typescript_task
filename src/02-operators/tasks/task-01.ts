/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRicePrice: number = 18000;
const friedRiceQty: number = 3;
const waterPrice: number = 5000;
const waterQty: number = 2;
const discount: number = 10000;
const totalFriedRice: number = friedRicePrice * friedRiceQty;
const totalWater: number = waterPrice * waterQty;
const grandTotal: number = totalFriedRice + totalWater;
const finalPayment: number = grandTotal - discount;


console.log(`Fried Rice: 3 x Rp${friedRicePrice.toLocaleString("id-ID")} = Rp${totalFriedRice.toLocaleString("id-ID")}`);
console.log(`Mineral Water: 2 x Rp${waterPrice.toLocaleString("id-ID")} = Rp${totalWater.toLocaleString("id-ID")}`);
console.log(`Grand Total (before discount): Rp${grandTotal.toLocaleString("id-ID")}`);
console.log(`Discount (Student Council): -Rp${discount.toLocaleString("id-ID")}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString("id-ID")}`);
