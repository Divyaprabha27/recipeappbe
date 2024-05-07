const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');
const userController = {
    signup: async (request, response) => {
        try {
            const { username, name, email, password } = request.body;
            const user = await User.findOne({ username })
            if (user) {
                return response.status(400).json({ error: 'user is already exists' });
            }
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new User({
                username,
                name,
                email,
                passwordHash
            });
            const savedUser = await newUser.save();
            response.json({message: 'user created', user: savedUser});
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },
    signin: async (request, response) => {
        try {
            const { email, password } = request.body;
            const user = await User.findOne({email});
            if(!user) {
                return response.json({error: 'user does not exist'});
            }
            const passwordMatch = await bcrypt.compare(password, user.passwordHash);
            if(!passwordMatch) {
                return response.json({error: 'incorrect password'})
            }
            const token = jwt.sign({
                id: user._id,
                username: user.username,
                name: user.name,
                email: user.email
            },config.JWT_SECRET);
            response.json({message: 'user signed in', token,username: 
            user.username, name: user.name,email: user.email});
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },
    getUser: async (request, response) => {
        try {
            // get the user id from the request
            const userId = request.userId;

            // get the user from the database
            const user = await User.findById(userId);
            console.log(user);
            // return the user
            response.json({ message: 'user retrieved', user });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}
module.exports = userController;