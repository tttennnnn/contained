const express = require('express');
const router = express.Router();
const services = require('../services/services');

router.post('/auth', async function(req, res, next) {
    try {
        res.json(await services.authenticate(req.body.user, req.body.authStr));
    } catch (err) {
        console.error('Error while getting user authStr.');
        next(err);
    }
});

// route to be added
router.post('/register', async (req, res) => {
    res.json({
        message: 'register!?'
    })
});

module.exports = router;