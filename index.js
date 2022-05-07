require('dotenv').config();
const express = require('express');
const app = express();


//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//routes
app.use('/places', require('./controllers/places'))

//home route
app.get('/', (req, res) =>{
    res.render('home');
})

//404 error route
app.get('*', (req, res) => {
    res.render('error404');
})

app.listen(process.env.PORT);