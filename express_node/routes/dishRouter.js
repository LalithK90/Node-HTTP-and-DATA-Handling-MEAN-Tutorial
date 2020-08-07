const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();


dishRouter.use(bodyParser.json());
//dish route is display
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the dishes to you !');
    })
    .post((req, res) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.discription);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res) => {
        res.end('Deleting all the dishes !');
    });
dishRouter.route('/:dishId')
    .get((req, res) => {
        res.end('Will send details of thr dish: ' + req.params.dishId);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .put((req, res) => {
        res.write('Updating the dishes: ' + req.params.dishId + '\n');
        res.end('Will update the dish ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting dishe: ' + req.params.dishId);
    });

module.exports = dishRouter;