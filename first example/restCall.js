const request = require("request");

request
    .get('http://ip-api.com/json/24.48.0.1')
    .on('response', function (response) {
        console.log(response.toString())
        console.log(response.data)
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type']) // 'image/png'
    })
