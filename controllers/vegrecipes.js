const Recipe = require('../models/recipes'); 

exports.getVegetarianRecipes = async (req,res) => {
  const {category} = req.body;
  try {
    const vegetarianRecipes = await Recipe.find({category: 'vegetarian'});
    res.json(vegetarianRecipes)
  }catch(err) {
    res.status(500).json({ message: err.message})
  }
}
