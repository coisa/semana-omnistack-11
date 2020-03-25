const express = require('express');
const router = express.Router();

router.get('/', require('../src/Handler/IndexHandler'));

router.get('/ongs', require('../src/Handler/ListAllOngsHandler'));
router.post('/ongs', require('../src/Handler/CreateOngHandler'));

router.get('/ongs/incidents', require('../src/Handler/ListAllOngIncidentHandler'));
router.post('/ongs/incidents', require('../src/Handler/CreateOngIncidentHandler'));
router.delete('/ongs/incidents/:id', require('../src/Handler/DeleteOngIncidentHandler'));

module.exports = router;