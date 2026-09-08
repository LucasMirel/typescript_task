/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPrice: number = 650000;
const nightsStayed: number = 4;
const serviceCharge: number = 120000;
const taxRate: number = 0.11;
const isVIP: boolean = true;

const roomSubtotal: number = roomPrice * nightsStayed;
const discount: number = isVIP ? roomSubtotal * 0.12 : 0;
const discountedRoomSubtotal: number = roomSubtotal - discount;
const tax: number = discountedRoomSubtotal * taxRate;
const finalPayment: number = discountedRoomSubtotal + tax + serviceCharge;

const freeBreakfastEligible: boolean = nightsStayed >= 3 || isVIP;

console.log("=== Hotel Room Checkout ===")
console.log("\nRoom Subtotal: Rp" + roomSubtotal.toLocaleString("id-ID"));
console.log("\nDiscount: Rp" + discount.toLocaleString("id-ID"));
console.log("\nTax: Rp" + tax.toLocaleString("id-ID"));
console.log("\nFinal Payment: Rp" + finalPayment.toLocaleString("id-ID"));
console.log("\nFree Breakfast Eligible: " + (freeBreakfastEligible ? "Yes" : "No"));

