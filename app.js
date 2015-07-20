var port = (process.env.VCAP_APP_PORT || 3000);
 var host = (process.env.VCAP_APP_HOST || 'localhost');
 var express = require('express');
 var app = express();
 app.get('/', function(req, res) {
    res.send('Hello from MoPaaS');
    });
 app.listen(port, host);