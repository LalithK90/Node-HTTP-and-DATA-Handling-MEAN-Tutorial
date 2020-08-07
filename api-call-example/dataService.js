var http = require('http');
var request = require('request');
var ip = require("./config");


var baseUrl = `http://ip-api.com/json/${ip}`;

/**
 * Get Message - GET
 */
// options for GET
var optionsgetmsg = {
    host : baseUrl, // here only the domain name
    // (no http/https !)
   // port : 443,
    path : ip, // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsgetmsg);
console.info('Do the GET call');

// do the GET request
var reqGet = http.request(optionsgetmsg, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);


    res.on('data', function(d) {
        console.info('GET result after POST:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});

//module.exports.data = callback;
module.exports.data = reqGet;
