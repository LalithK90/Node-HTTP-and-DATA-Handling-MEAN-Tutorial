const MongoClient = require('mongodb').MongoClient;
const data = require('./service/databaseService');

(async () => {
    let results = await data()
    let jsonString = JSON.stringify(results);
    console.log(jsonString);
})()
/*
mongodb+srv://asanka12345:<password>@cluster0.wuegf.mongodb.net/<dbname>?retryWrites=true&w=majority
* */

//var url = "mongodb://localhost:27017/mydb";
let url ="mongodb+srv://asanka12345:laliTH%90@cluster0.wuegf.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

