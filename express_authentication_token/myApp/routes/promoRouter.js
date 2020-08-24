const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();


promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the promotions to you !');
    })
    .post((req, res) => {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.discription);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all the promotions !');
    });
promotionRouter.route('/:promotionId')
    .get((req, res) => {
        res.end('Will send details of the promotion: ' + req.params.promotionId);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotion');
    })
    .put((req, res) => {
        res.write('Updating the promotions : ' + req.params.promotionId + '\n');
        res.end('Will update the promotion ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting promotion: ' + req.params.promotionId);
    });

module.exports = promotionRouter;