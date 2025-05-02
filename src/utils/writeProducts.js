import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (newProducts) => {
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(newProducts, undefined, 2),
      'utf-8',
    );
  } catch (err) {
    console.log(`Error writing products: ${err.message}`);
  }
};
