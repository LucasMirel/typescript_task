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

const hours: number = 7;
const minutes: number = 35;
const rateHour: number = 8000;
const discountR: number = 0.15;
const discountHoldHours: number = 5;

const totalMinutes: number = hours * 60 + minutes;

const fullHours: number = Math.floor(totalMinutes / 60);
const remainMinutes: number = totalMinutes % 60;

const billedHours: number = remainMinutes > 0 ? fullHours + 1 : fullHours;

const totalBeforeDiscount: number = billedHours * rateHour;

const isDiscountEligible: boolean = billedHours > discountHoldHours;
const discountAmount: number = isDiscountEligible ? totalBeforeDiscount * discountR : 0;

const finalPayment: number = totalBeforeDiscount - discountAmount;


console.log(`Usage: ${hours} hours ${minutes} minutes`);
console.log("Total Playing Time (minutes):", totalMinutes);
console.log("Remaining Minutes:", remainMinutes);
console.log("Total Billed Hours:", billedHours);
console.log(`Total Before Discount: Rp${totalBeforeDiscount.toLocaleString("id-ID")}`);
console.log(`Discount Eligible (> ${discountHoldHours} hours): ${isDiscountEligible ? "Yes" : "No"}`);
console.log(`Discount Amount: Rp${discountAmount.toLocaleString("id-ID")}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString("id-ID")}`);
