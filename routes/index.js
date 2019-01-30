var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var segundo = (new Date()).getSeconds();

  res.render('index', { 
    title: 'Hello world',
    parrafo: '<p> Es un parrafo inyectado </p>',
    condicion: {
      segundo: segundo,
      estado: segundo  % 2 === 0
    },
    users: [ 
      { name: 'Maria' },
      { name: 'Ana' },
      { name: 'Pilar' }
    ]
  });
});

module.exports = router;
