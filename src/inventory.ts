import { Product } from "./products";

export interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: {name: 'motor', price: 10.00}, quantity: 10 },
    { product: {name: 'sensor', price: 12.50}, quantity: 4 },
    { product: {name: 'LED', price: 1.00}, quantity: 20 }
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
    let total = 0;
    array.forEach((element) => {
        let price = element.product.price;
        total += price * element.quantity;
    });
    return total;
}

let value = calcInventoryValue(inventory);
console.log(value);
