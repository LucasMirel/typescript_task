/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

const orderStatus = {
  readyToShip: 0,
  unpaidOrders: 0,
  waitingForStock: 0,
  readyToShipIds: [] as string[]
}

for (const order of orders) {
  if (order.paid && order.stockAvailable) {
    orderStatus.readyToShip++;
    orderStatus.readyToShipIds.push(order.id);
  } else if (!order.paid) {
    orderStatus.unpaidOrders++;
  } else if (!order.stockAvailable) {
    orderStatus.waitingForStock++;
  }
}

console.log("");
console.log("=== Order Shipping Report ===");
console.log(`Orders Ready to Ship: ${orderStatus.readyToShip}`);
console.log(`Unpaid Orders: ${orderStatus.unpaidOrders}`);
console.log(`Orders Waiting for Stock: ${orderStatus.waitingForStock}`);
console.log(`Order IDs Ready to Ship: ${orderStatus.readyToShipIds.join(", ")}`);
