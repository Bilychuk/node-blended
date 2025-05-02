import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const generateProducts = async (amount) => {
  try {
    const products = await readProducts();
    const newProducts = Array.from({ length: amount }, () =>
      createFakeProduct(),
    );
    const updatedProducts = [...products, ...newProducts];
    await writeProducts(updatedProducts);
  } catch (error) {
    console.log(`Error generating products: ${error.message}`);
  }
};

generateProducts(3);
