const mongoose = require('mongoose');
const config = require('./utils/config');
const app = require('./app');
mongoose.connect(config.MONGODB_URI)
    .then(()=> {
        console.log('connected to mongodb');
        app.listen(config.PORT,() => {
            console.log(`server is running on Port ${config.PORT}`)
        })
    })
    .catch ((error)=> {
        console.log('error connect to mongodb', error.message);
    })