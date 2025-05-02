import { readProducts } from '../utils/readProducts.js';

const getProductsByMinPrice = async (price) => {
  try {
    const products = await readProducts();
    const filteredProducts = products.filter(
      (product) => product.price >= price,
    );
    console.log(
      `Products with price ${price} and above:`,
      JSON.stringify(filteredProducts, null, 2),
    );
    return filteredProducts;
  } catch (error) {
    console.log(`Error reading products: ${error.message}`);
  }
};

getProductsByMinPrice(700);
getProductsByMinPrice(200);
getProductsByMinPrice(500);
