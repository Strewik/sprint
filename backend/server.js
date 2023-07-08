const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();	
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/dbConfig');
const port = process.env.PORT || 3000

const restaurantRoutes = require('./routes/restaurantRoutes');
const userRoutes = require('./routes/userRoutes');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false}))

app.use('/', restaurantRoutes)
app.use('/', userRoutes)

app.use(errorHandler);


app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})

