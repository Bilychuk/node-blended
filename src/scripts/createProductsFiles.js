import { readProducts } from '../utils/readProducts.js';

const createProductsFiles = async () => {
  try {
    const products = await readProducts();
  } catch (error) {
    console.log(`Error creating products files ${error.message}`);
  }
};
