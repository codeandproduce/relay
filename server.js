const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '/');

var app = express();
var port = process.env.PORT || 8000;


app.use('/', express.static(publicPath));

const routes = require('./routes/index');
app.use('/', routes);

app.listen(port, () => {
  console.log('port is up and running at 8000');
});


