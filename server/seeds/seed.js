const db = require('../config/connection');
const { Category } = require('../models');
const categorySeeds = require('./categoryData.json');

const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Product', 'products');
    await cleanDB('Category', 'categories');

    // Create Categories
    const categories = await Category.create(categorySeeds);
    console.log(`${categories.length} categories added successfully!`);

  } catch (err) {
    console.error('Error during seeding process:', err);
    if (err && err.errors) {
      Object.keys(err.errors).forEach(key => {
        console.error(`Validation error for ${key}: ${err.errors[key].message}`);
      });
    }
  } finally {
    console.log('Seeding process completed.');
    process.exit(0);
  }
});
