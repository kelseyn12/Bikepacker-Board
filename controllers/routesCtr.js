/*========================
        Dependencies
==========================*/
const express = require("express");
const routesRouter = express.Router();
const Route = require('../models/routes');
const routeSeed = require('../models/routeSeed');

/*======================
        Routes
========================*/

//SEED//
routesRouter.get('/seed', (req, res) => {
    Route.deleteMany({}, (error, allRoutes) => {});
        Route.create(routeSeed, (error, data)=> {
            res.redirect('/routes');
        });
    });


//INDEX//
routesRouter.get('/', (req, res) => {
    // res.send('index');
    Route.find({}, (error, allRoutes) => {
        res.render('index.ejs', {
            routes: allRoutes,
        });
    });
});

//NEW//

//DELETE//

//UPDATE//


//CREATE//

//EDIT//

//SHOW//




module.exports = routesRouter;