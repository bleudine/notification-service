const express = require('express');
const router = express.Router();
const mailer = require('../services/mailer');
const SMSSender = require('../services/smsSender');

const {REQUEST_ORIGIN} = process.env;

router.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', REQUEST_ORIGIN);
    next();
});

router.post('/mail', (req, res) => {
    mailer.sendMail(req, res);
});

router.post('/sms', (req, res) => {
    SMSSender.sendSMS(req, res);
});

module.exports = router;