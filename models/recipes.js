const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    preperationtime: String,
    cookingtime: String,
    servings: String,
    ingredients: [String],
    instructions: [String],
    image: String,
    imgthumb: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now,
    }
});
module.exports = mongoose.model('Recipes',recipeSchema, 'recipes');