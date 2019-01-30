"use strict";

var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Midleware de router clientes');
    next();
});

router.get('/', function(req, res, next) {
    res.send('Respuesta a client');
});

router.get('/:id', function(req, res, next){
    res.send('El usuario es ' + req.params.id);
});

router.post('/', function(req, res, next){
    console.log('req.body', req.body);
    res.json({ recidibo: req.body.num });
});

module.exports = router;
