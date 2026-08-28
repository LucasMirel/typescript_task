/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hours = 7;
const minutes = 35;
const rateHour = 8000;
const discountR: number = 0.15;
const discountHoldHours: number = 5;

const totalMinutes = hours * 60 + minutes;
const fullHours = Math.floor(totalMinutes / 60);
const remainMinutes = totalMinutes % 60;
const billHours = remainMinutes > 0 ? fullHours + 1 : fullHours;
const totalBefDis: number = billHours * rateHour;
const isDiscountEligible: boolean = billHours > discountHoldHours;
const discountAmount: number = isDiscountEligible ? totalBefDis * discountR: 0;

const finalPayment: number = totalBefDis - discountAmount;

console.log(`Usage: ${hours} hours ${minutes} minutes`);
console.log("Total Playing Time (minutes):", totalMinutes);
console.log("Remaining Minutes:", remainMinutes);
console.log("Total Billed Hours:", billHours);
console.log(`Total Before Discount: Rp${totalBefDis.toLocaleString("id-ID")}`);
console.log(`Discount Eligible (> ${discountHoldHours} hours): ${isDiscountEligible ? "Yes" : "No"}`);
console.log(`Discount Amount: Rp${discountAmount.toLocaleString("id-ID")}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString("id-ID")}`);
