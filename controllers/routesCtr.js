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
routesRouter.get('/new', (req, res) => {
    res.render('new.ejs')
});
//DELETE//
routesRouter.delete("/:id", (req, res) => {
    Route.findByIdAndDelete(req.params.id, (error, data) => {
        // res.send("deleting")
        res.redirect("/routes")
    });
});
//UPDATE//
routesRouter.put("/:id", (req, res) => {
    console.log(req.body);
    req.body.img=req.body.img.split(',');
    // res.send(req.body)
    Route.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new:true,
        },
        (error, updatedRoute) =>{
            res.redirect(`/routes/${req.params.id}`)
        });
});

//CREATE//
routesRouter.post('/', (req, res) => {
    // console.log(req.body);
    // res.send('received');
Route.create(req.body, (error, product) => {
    // console.log(error)
    res.redirect('/routes');
    });
});
//EDIT//
routesRouter.get('/:id/edit', (req, res) => {
    Route.findById(req.params.id, (error, foundRoute) => {
        console.log(error);
        res.render('edit.ejs', {
            route: foundRoute,
        
        });
    });
});

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