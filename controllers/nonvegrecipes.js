const Recipe = require('../models/recipes'); 

exports.getNonVegetarianRecipes = async (req,res) => {
  const {category} = req.body;
  try {
    const nonvegetarianRecipes = await Recipe.find({category: 'non-vegetarian'});
    res.json(nonvegetarianRecipes)
  }catch(err) {
    res.status(500).json({ message: err.message})
  }
}
