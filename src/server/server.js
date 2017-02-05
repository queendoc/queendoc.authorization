/**
 * Created by umut.taherzadeh on 2017-02-04.
 */
// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================


/** ----------------------------- services ----------------------------- **/

/** -------------> TO access backend services, you need to add your service file into services object <------------- **/
var services = {};
// TODO make it dynamic load
services["LoginService"] = require("./services/login/login.service");
services["ProjectRealmService"] = require("./services/project/project-realm/project.realm.service");
services["ProjectDetailService"] = require("./services/project/project-details/project.details.service");

/** ----------------------------- end of services ----------------------------- **/




// config files
// var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
// require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);



app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //
    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

///dispatch/login
app.post('/dispatch', function(req, res) {

    // TODO error handling
    // TODO define return object definition
    console.log("its in");

    console.log(req.body.service);
    console.log(req.body.parameters);
    console.log(req.body.serviceTime);

    if(!req.body.service) {
        console.error("service definition required");
        throw "service definition required";
    }
    var servicePrefix = req.body.service.split("_")[0];
    var serviceMethod = req.body.service.split("_")[1];

    if(!services[servicePrefix] || !services[servicePrefix][serviceMethod]) {
        console.error("service definition not found");
        throw "service definition not found";
    }

    var response = services[servicePrefix][serviceMethod](req.body.parameters);
    res.json({"data" : response});

});

// expose app
exports = module.exports = app;