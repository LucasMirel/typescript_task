/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

type Sale = {
    sales : number[];
    totalSales : number;
    highestSale : number;
    lowestSale : number;

}

const sale : Sale = {
    sales :[125000,350000,78000,910000,150000,420000,275000,99000,640000,18000],
    totalSales : 0,
    highestSale : 0,
    lowestSale : 0,
}

for (let i = 0; i < sale.sales.length; i++) {
    const transaction = sale.sales[i];
    sale.totalSales += transaction;
    if (transaction > sale.highestSale) {
        sale.highestSale = transaction;
    }
    if (transaction < sale.lowestSale || sale.lowestSale === 0) {
        sale.lowestSale = transaction;
    }
}

const averageTransaction = sale.totalSales / sale.sales.length;

console.log("")
console.log("=== Sales Analysis ===");
console.log(`Total Sales Revenue: ${sale.totalSales}`);
console.log(`Highest Transaction: ${sale.highestSale}`);
console.log(`Lowest Transaction: ${sale.lowestSale}`);
console.log(`Average Transaction Value: ${averageTransaction}`);
console.log("")