const express = require('express');
const router = express.Router();

const { index, create, update } = require('./controllers/User.Controller');


router.get('/user', index);

router.post('/users', create);

router.put('user/:username', update);

module.exports = router;
