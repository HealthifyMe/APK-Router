var express = require('express');
var MobileDetect = require('mobile-detect');
var app = express();

app.get('/', function (req, res) {
  md = new MobileDetect(req.headers['user-agent']);
  if (md.version('Android') <= 4.04) {
    res.redirect('http://' + req.headers.host + '/v14.html');
  } else {
    res.redirect('http://' + req.headers.host + '/v18.html');
  }
});

app.get('/i', function (req, res) {
  res.redirect('http://' + req.headers.host + '/index.html');
});

app.use(express.static('public'));

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
