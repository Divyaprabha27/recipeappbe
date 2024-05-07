const Recipe = require('../models/recipes');

exports.getRecipeById = async(req,res) => {
     try {
        const recipe = await Recipe.findById(req.params.id);
        
        if(!recipe) {
            return res.status(404).json({message: 'Recipe not found'})
        }
        return res.json(recipe)
    }catch(error) {
        return res.status(500).json({message: 'Internal server error'})
    }
}
