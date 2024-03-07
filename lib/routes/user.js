const express = require('express');
const router = express.Router();
const services = require('../services/services');

router.get('/auth', async function(req, res, next) {
    try {
        res.json(await services.authenticate(req.body.user, req.body.authStr));
    } catch (err) {
        console.error('Error while getting user authStr.');
        next(err);
    }
});

router.get('/register', async (req, res) => {
    res.json({
        message: 'register!?'
    })
});

module.exports = router;