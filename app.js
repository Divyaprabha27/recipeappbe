const express = require('express');

const app = express();

const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const recipesRouter = require('./routes/recipesRoutes');
const uploadImg = require('./controllers/uploadImg');
const postRouter = require('./routes/postRoutes');
app.use(cors());

app.use(express.json());

//define the endpoints
app.use('/api/users', userRouter);

app.use('/api/recipes', recipesRouter);

app.use('/api/posts', postRouter);


module.exports = app;

