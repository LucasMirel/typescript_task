/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

const stockCount = {
    outStock: 0,
    lowStock: 0,
    safeStock: 0,
    totalStock: 0
};

for (let i = 0; i < stocks.length; i++) {
    const item = stocks[i];
    stockCount.totalStock += item;
    if (item === 0) {
        stockCount.outStock++;
    } else if (item >= 10) {
       stockCount.lowStock++;
    } else if (item >= 75) {
        stockCount.safeStock++;
    }
}

console.log("");
console.log("=== Warehouse Stock Report ===");
console.log(`Out of Stock: ${stockCount.outStock}`);
console.log(`Low Stock: ${stockCount.lowStock}`);
console.log(`Safe Stock: ${stockCount.safeStock}`);
console.log(`Total Inventory: ${stockCount.totalStock}`);
console.log(`Average Stock Quantity: ${stockCount.totalStock / stocks.length}`);