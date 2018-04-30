var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();

var HolidayAPI = require('node-holidayapi');
var hapi = new HolidayAPI('b22badd8-06a7-414c-885c-01d6e6c1145a').v1;

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/api/holiday-list', function (req, res) {
  hapi.holidays({
    country: 'US',
    year: 2015,
  }, function (err, data) {
    res.send(data);
  });
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
var port = process.env.PORT || '3000';
const server = http.createServer(app);
server.listen(port, () => console.log(`Server is Running on port 3000.... `));
