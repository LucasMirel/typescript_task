/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const keyboardCost: number = 850000;
const keyboardQty: number = 1;
const mouseCost: number = 275000;
const mouseQty: number = 2;
const monitorStandCost: number = 420000;
const monitorStandQty: number = 1;

const vouchValue: number = 100000;
const isPremium: boolean = true;
const vatR: number = 0.11;
const pointR: number = 50000;

const subtotal: number =
  keyboardCost * keyboardQty +
  mouseCost * mouseQty +
  monitorStandCost * monitorStandQty;

const membershipDiscount: number = isPremium ? subtotal * 0.1 : 0;
const afterMembershipDiscount: number = subtotal - membershipDiscount;
const afterVouch: number = afterMembershipDiscount - vouchValue;
const payBefTax: number = afterVouch;

const vat: number = payBefTax * vatR;
const finalPay: number = payBefTax + vat;

const rewardPoints: number = Math.floor(payBefTax / pointR);
const isFreeShippingEligible: boolean =
  isPremium || payBefTax > 1500000;


console.log("Product Subtotal:", subtotal);
console.log("Membership Discount:", membershipDiscount);
console.log("Voucher Deduction:", vouchValue);
console.log("Payment Before Tax:", payBefTax);
console.log("VAT:", vat);
console.log("Final Payment:", finalPay);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping Eligibility:", isFreeShippingEligible);
