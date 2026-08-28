/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type products = {
    proCode: number;
    proName: string;
    proCost: number;
    proQua: number;
    proWeight: string;
    proDis: boolean;

}

const product1: products = {
    proCode: 990,
    proName: "Milk",
    proCost: 5,
    proQua: 30,
    proWeight: "1.03KG",
    proDis: false
}

const product2: products = {
    proCode: 999,
    proName: "Eggs",
    proCost: 10,
    proQua: 60,
    proWeight: "57 grams",
    proDis: true
}

const product3: products = {
    proCode: 1010,
    proName: "Chips",
    proCost: 5,
    proQua: 25,
    proWeight: "283 grams",
    proDis: false
}


console.log(product1);
console.log("--------------------------------------------------");
console.log(product2);
console.log("--------------------------------------------------");
console.log(product3);
console.log("--------------------------------------------------");
