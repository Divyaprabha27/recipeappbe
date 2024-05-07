const Recipes = require('../models/recipes');
const recipesController = {
    recipes: async (request, response) => {
        try {
            const userId = request.userId;
            const { title,  category, description, servings, image, imgthumb, preperationtime, cookingtime, ingredients, instructions } = request.body;
            console.log(ingredients);
            const recipes = new Recipes({
                title,
                category,
                description,
                preperationtime,
                servings,
                image,
                imgthumb,
                cookingtime,
                ingredients,
                instructions,
                user: userId,
            });
            recipes.save();
            return response.json({ message: 'Post created Successfully', recipes })
        }
        catch (error) {
            return response.json({ error: 'Token is invalid' })
        }
    },
    viewAllPosts: async (req, res) => {
        Recipes.find()
            .then(recipes => res.json(recipes))
            .catch(err => res.json(err));
    },
    getVegetarianRecipes: async (req, res) => {
        Recipes.find()
        .then(vegetarianRecipes => res.json(vegetarianRecipes))
        .catch(err => res.json(err));
    }
}

module.exports = recipesController;