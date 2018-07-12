const express = require('express');
const router = express.Router();

const {REQUEST_ORIGIN} = process.env;

router.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', REQUEST_ORIGIN);
    next();
});

router.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
        company: process.env.COMPANY,
        mail: {
            user: process.env.MAIL,
            provider: process.env.SERVICE_HOST,
        },
        OAUTH: `secret=***,clientId=${process.env.OAUTH_CLIENT_ID}`,
        Nexmo: `secret=***,apiKey=${process.env.NEXMO_API_KEY}`
    }))
});

module.exports = router;