const express = require('express');
const dotenv = require('dotenv');	
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3000

const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false}))

app.use('/', restaurantRoutes) 

app.use(errorHandler);


app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})

