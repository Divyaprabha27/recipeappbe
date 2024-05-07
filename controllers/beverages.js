const Recipe = require('../models/recipes'); 

exports.getBeveragesRecipes = async (req,res) => {
  const {category} = req.body;
  try {
    const beverageRecipes = await Recipe.find({category: 'beverages'});
    res.json(beverageRecipes)
  }catch(err) {
    res.status(500).json({ message: err.message})
  }
}
