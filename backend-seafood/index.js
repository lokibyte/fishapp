var express = require('express'),
    faye = require('faye'),
    http = require('http'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    routers = require('./router/router.js');
;

var app = express(),
    server = http.createServer(app),
    bayeux = new faye.NodeAdapter({mount: '/seafood', timeout: 45});
    // console.info("bayeux",bayeux);
var port = 3001;
var config = require('./config.js');
var mysql = require('mysql');
var con = mysql.createConnection(config.mysqlCon);
var http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
bayeux.attach(server);
app.use(cors());

bayeux.on('handshake', function(clientId) {
    console.log('Client connected', clientId);

});

server.listen(port, function() {
    console.log('Listening on ' + port);
});
app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get('/', function(req, res){
	res.send({'response':'success'});
});


app.get('/time', (req, res) => {
    const time = (new Date()).toLocaleTimeString();
    res.status(200).send(`The Time is ${time}`);
});

  
app.get('/test',routers.test);
app.get('/products',routers.products);
app.get('/categories',routers.categories);
app.get('/coupons',routers.coupons);
app.get('/orders',routers.orders);
// app.post('/register',routers.userRegister);
// app.post('/updateprofile',routers.userupdate);
// app.get('/products', routers.getProducts);