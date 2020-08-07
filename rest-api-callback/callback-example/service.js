const http = require('http');

function getLocation(ip, callback) {
    http.get('http://ip-api.com/json/' + ip, (res, err) => {
        if (err) {
            return callback(500, err);
        } else {
            res.on('data', (chunk) => {
                callback(200, chunk);
            });
        }
    });
}

module.exports.getLocation = getLocation;