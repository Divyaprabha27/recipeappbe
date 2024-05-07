const Recipe = require('../models/recipes'); 

exports.getDessertRecipes = async (req,res) => {
  const {category} = req.body;
  try {
    const dessertRecipes = await Recipe.find({category: 'desserts'});
    res.json(dessertRecipes)
  }catch(err) {
    res.status(500).json({ message: err.message})
  }
}
