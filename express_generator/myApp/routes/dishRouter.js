const express = require('express');
const bodyParser = require('body-parser');
//get database connection
const mongoose = require('mongoose');
//get database
const Dishes = require('../models/dishes');

const dishRouter = express.Router();


dishRouter.use(bodyParser.json());
//dish route is display
dishRouter.route('/')
    .get((req, res, next) => {
        Dishes.find({})
            .then((dishes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dishes);
            }, (error) => next(error))
            .catch((error)=>next(error));
    })
    .post((req, res, next) => {
        Dishes.create(req.body)
            .then((dish) => { 
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dishes);
            }, (error) => next(error))
            .catch((error)=>next(error));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        Dishes.remove({})
            .then((resp) => { 
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (error) => next(error))
            .catch((error)=>next(error));
    });

dishRouter.route('/:dishId')
    .get((req, res, next) => {
        Dishes.findById(req.params.dishId)
            .then((dish) => { 
           res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            }, (error) => next(error))
            .catch((error)=>next(error));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .put((req, res, next) => {
        //find by id and update
        Dishes.findByIdAndUpdate(req.params.dishId, {
            $set: req.body
            //{new:true} if need to return new updated object
        }, { new: true }).then((dish) => {
            res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            },
            (error) => next(error))
            .catch((error)=>next(error));  
    })
    .delete((req, res, next) => {
         Dishes.findByIdAndRemove(req.params.dishId)
            .then((resp) => { 
           res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (error) => next(error))
            .catch((error)=>next(error));
    });

module.exports = dishRouter;