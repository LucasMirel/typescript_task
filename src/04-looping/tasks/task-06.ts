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

for (let i = 0; i < stockCount; i++) {
    const score = stocks[i];
    stockCount.totalStock += score;
    if (score >= 95) {
        stockCount.outStock++;
    } else if (score >= 85) {
       stockCount.lowStock++;
    } else if (score >= 75) {
        stockCount.safeStock++;
    }
}

const averageScore = medalCounts.totalScore / scores.length;

console.log("");
console.log("=== Competition Results ===");
console.log(`Gold Medals: ${medalCounts.gold}`);
console.log(`Silver Medals: ${medalCounts.silver}`);
console.log(`Bronze Medals: ${medalCounts.bronze}`);
console.log(`No Medals: ${medalCounts.noMedal}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log("");
