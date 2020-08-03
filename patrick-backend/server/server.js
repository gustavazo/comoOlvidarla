// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
var MercadoPago = require('mercadopago');
const bodyParser = require('body-parser');
const axios = require('axios');
const fallbackApp = require('express')();
const app = module.exports = loopback();


fallbackApp.use('/', (req, res) => {
  res.redirect('https://cursosbestprice.com');
});

fallbackApp.use('/admin', (req, res) => {
  res.redirect('http://cursosbestprice.com:3001');
});

fallbackApp.listen(3010, () => console.log('fallback server'));

const MP_ACCESS_TOKEN = 'TEST-7507163990245506-062818-88da4b88e729d83eabf86713e3bfa344__LB_LA__-172317780';

MercadoPago.configure({
  sandbox: true,
  access_token: MP_ACCESS_TOKEN
});

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.post('/api/preferences', (req, res) => {
  console.log('preferences', req.body.items, req.query);
  const preference = {
    items: JSON.parse(req.body.items),
    external_reference: req.query.external_reference,
  };

  MercadoPago.preferences.create(preference)
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

fallbackApp.post('/api/hooks/payment', (req, res) => {
  // Receive payment notification
  console.log('Payment!');
  console.log(req.query);

  const paymentId = req.query['data.id'];

  axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${MP_ACCESS_TOKEN}`)
    .then(response => {
      console.log('response', response.data.external_reference);
      app.io.emit(response.data.external_reference, {paid: true});
    })
    .catch(err => console.log('error', err));

  // app.io.emit(123, {
  //   paid: true
  // });

  res.send(200);
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.io = require('socket.io')(app.start());

    app.io.on('connection', function(socket) {
      console.log('a user connected');
      socket.on('disconnect', function() {
          console.log('user disconnected');
      });
    });
});
