export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: 'milk', price: 2 },
    { name: 'yogurt', price: 4 },
    { name: 'shirt', price: 15 },
    { name: 'pants', price: 25 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
    return (
        array.reduce(
          (sum: number, currentProducts: Product) =>
            sum + currentProducts.price,
          0
        ) / array.length
      );
}

let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);