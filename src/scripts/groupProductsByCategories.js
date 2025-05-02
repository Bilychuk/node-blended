import { readProducts } from '../utils/readProducts.js';

const groupProductsByCategories = async () => {
  try {
    const products = await readProducts();
    const groupedProducts = products.reduce((acc, product) => {
      const { category, name } = product;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(name);
      return acc;
    }, {});
    console.log(groupedProducts);
    return groupedProducts;
  } catch (error) {
    console.log(`Error grouping products ${error.message}`);
  }
};

groupProductsByCategories();
