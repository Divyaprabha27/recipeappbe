const Post = require('../models/recipes');

const postController = {
    
    AllPosts: async (request, response) => {
        try {
            const userId = request.userId;
            
            // get all the posts
            const posts = await Post.find({ user: userId });

            // return the posts
            return response.json({ message: 'Posts retrieved successfully', posts });

        } catch (error) {
            if (error.name === 'ValidationError') {
                return response.status(400).json({ error: 'Validation Error', message: error.message });
            } else if (error.name === 'CastError') {
                return response.status(400).json({ error: 'Invalid ID', message: error.message });
            }
            // Handle other types of errors
            console.error('Error:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports = postController;