const http = require('http');

async function getLocation(ip) {
    return await http.get('http://ip-api.com/json/' + ip);
}

module.exports.getLocation = getLocation;

/*
var examplePromise = new Promise(function(resolve, reject) {
    // Do whatever we are going to do and then make the appropriate call below:
    resolve('Happy!'); // — Everything worked.
    reject('Sad!'); // — We noticed that something went wrong.
}):*/
