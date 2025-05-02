import { readProducts } from '../utils/readProducts.js';

const getTotalPrice = async () => {
    try {
        const products = await readProducts();
        let totalPrice = 0;
        products.map((product) => {
            totalPrice = totalPrice + Number(product.price);
        });
        console.log(`Total price is ${totalPrice}`);
    }
    catch (error) {
        console.log(`Error getting total price: ${error.message}`);
    };
};
getTotalPrice();
