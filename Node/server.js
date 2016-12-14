var express = require('express');
var bodyParser = require('body-parser');// Parse HTML BODY
var app = express();
app.set('views' , './app/views');
  app.set('view engine' , 'jade');
  app.use(bodyParser.urlencoded({
    extended : true
  }));
  app.use(bodyParser.json());
require('./app/route/index.routes')(app);
require('./app/route/search.routes')(app);

app.use(express.static('./public'));

app.listen(3000);
console.log("running");
