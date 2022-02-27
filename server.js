/*=========================
        Dependencies
==========================*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');
const routesController = require('./controllers/routesCtr');

require('dotenv').config();

/*==============================
        Database connection
==============================*/
const {
        PORT,
        DATABASE_URL
} = process.env;
mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

const db = mongoose.connection
db.on('error', (error) =>
        console.log(error.message + ' is mongo not running?'));
db.on('connected', () =>
        console.log('mongo connected'));
db.on('disconnected', () =>
        console.log('mongo disconnected'));

/*================================
        Middleware
==================================*/
app.use(morgan('dev'));

//body parser middleware: give access to req.body
app.use(express.urlencoded({
        extended: false
}));

app.use(methodOverride("_method"));
app.use('/public', express.static('public'));
app.use("/routes/", routesController);

//ROUTES//
app.get('/', (req, res) => {
        res.redirect('/routes')
});

app.use('/routes', routesController);

/*=============================
        Catch URL Mistakes
=============================*/
app.get("/", (req, res) => {
        res.redirect("/products");
});

app.get("/*", (req, res) => {
        res.send("<h1>404 - Page Not Found</h1>");
});


/*============================
        Listeners
=============================*/
app.listen(PORT, () =>
        console.log(`server is listening on port: ${PORT}`));