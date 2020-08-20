const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();


leaderRouter.use(bodyParser.json());
//dish route is display
leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the ledears to you !');
    })
    .post((req, res) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.discription);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /ledears');
    })
    .delete((req, res) => {
        res.end('Deleting all the leaders !');
    });
leaderRouter.route('/:leaderId')
    .get((req, res) => {
        res.end('Will send details of the leader: ' + req.params.leaderId);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leders');
    })
    .put((req, res) => {
        res.write('Updating the leaders : ' + req.params.leaderId + '\n');
        res.end('Will update the leader ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting leader: ' + req.params.leaderId);
    });

module.exports = leaderRouter;