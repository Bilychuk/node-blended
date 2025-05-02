import { readProducts } from '../utils/readProducts.js';

const getUniqueCategories = async () => {
  try {
    const products = await readProducts();
    const uniqueCategories = new Set(
      products.map((product) => product.category),
    );
    console.log(Array.from(uniqueCategories));
  } catch (error) {
    console.log(`Error getting unique categories: ${error.message}`);
  }
};

getUniqueCategories(0);
