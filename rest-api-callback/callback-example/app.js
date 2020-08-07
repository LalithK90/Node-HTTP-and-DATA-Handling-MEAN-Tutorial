const location = require('./service');

location.getLocation('24.48.0.1', function (status, result) {
    if (status === 200) {
        console.log('success  ' + result);
    } else {
        console.log('error  ' + result);
    }
})


// url = http://ip-api.com/json/24.48.0.1