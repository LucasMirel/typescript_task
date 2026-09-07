/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice: number = 850000;
const WirelessPrice: number = 275000;
const mousePadPrice: number = 120000;

let keyboardQuantity: number = 1;
let wirelessQuantity: number = 2;
let mousePadQuantity: number = 1;

let subtotal: number = keyboardPrice*keyboardQuantity+WirelessPrice*wirelessQuantity+mousePadPrice*mousePadQuantity;
let finalTotal: number = subtotal>1000000 ? subtotal-1000000 : subtotal;

console.log("=== ITEMS CHECK ===");
console.log("\nSubtotal : ",subtotal);
console.log("\nFinal Price : ", finalTotal);

/* Object setup cart items */
// type CartItem = {
//   productName: string;
//   price: number;
//   quantity: number;
// }

// /* Variable Input */
// const cartItems: CartItem[] = [
//   { productName: "Mechanical Keyboard", price: 850000, quantity: 1 },
//   { productName: "Wireless Mouse", price: 275000, quantity: 2 },
//   { productName: "Mouse Pad", price: 120000, quantity: 1 },
// ]

// /* boolean premium setup */
// const isPremium: boolean = true;

// /* Variable declare "let" */
// let subtotal: number = 0;
// let totalItems: number = 0;

// /* for loop calculation input */
// for (const item of cartItems) {
//   subtotal += item.price * item.quantity;
//   totalItems++;
// }

// /* variable input 2 and calculation */
// const discounthold: number = 1000000;
// const discountR: number = 0.1;
// const isDiscountApp: boolean = subtotal > discounthold;
// const discountAmount: number = isDiscountApp ? subtotal * discountR : 0;
// const freeShipping: boolean = isPremium;
// const finalPayment: number = subtotal - discountAmount;

// /* array function for loop */
// cartItems.forEach((item) => {
//   console.log(`${item.productName}: ${item.quantity} x Rp${item.price.toLocaleString("id-ID")}`);
// });

// /* Log output and placeholder */
// console.log(`Subtotal: Rp${subtotal.toLocaleString("id-ID")}`);
// console.log(`Discount Applied: ${isDiscountApp ? "Yes" : "No"} ${isDiscountApp ? `(-Rp${discountAmount.toLocaleString("id-ID")})` : ""}`);
// console.log(`Free Shipping (Premium Member): ${freeShipping ? "Yes" : "No"}`);
// console.log(`Final Payment: Rp${finalPayment.toLocaleString("id-ID")}`);
