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

type CartItem = {
  productName: string;
  price: number;
  quantity: number;
}

const cartItems: CartItem[] = [
  { productName: "Mechanical Keyboard", price: 850000, quantity: 1 },
  { productName: "Wireless Mouse", price: 275000, quantity: 2 },
  { productName: "Mouse Pad", price: 120000, quantity: 1 },
]

const isPremium: boolean = true;

let subtotal: number = 0;
let totalItems: number = 0;

for (const item of cartItems) {
  subtotal += item.price * item.quantity;
  totalItems++;
}

const discounthold: number = 1000000;
const discountR: number = 0.1;
const isDiscountApp: boolean = subtotal > discounthold;
const discountAmount: number = isDiscountApp ? subtotal * discountR : 0;
const freeShipping: boolean = isPremium;
const finalPayment: number = subtotal - discountAmount;

cartItems.forEach((item) => {
  console.log(`${item.productName}: ${item.quantity} x Rp${item.price.toLocaleString("id-ID")}`);
});

console.log(`Subtotal: Rp${subtotal.toLocaleString("id-ID")}`);
console.log(`Discount Applied: ${isDiscountApp ? "Yes" : "No"} ${isDiscountApp ? `(-Rp${discountAmount.toLocaleString("id-ID")})` : ""}`);
console.log(`Free Shipping (Premium Member): ${freeShipping ? "Yes" : "No"}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString("id-ID")}`);
