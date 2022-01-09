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
routesRouter.get('/:id', (req, res) => {
    Route.findById(req.params.id, (error, foundRoute) => {
        // res.send(foundRoute);
        res.render('show.ejs', {
            route: foundRoute,
        });
    });
});



module.exports = routesRouter;