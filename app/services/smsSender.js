const Nexmo = require('nexmo');

const {NEXMO_API_KEY, NEXMO_API_SECRET, SMS_PLACEHOLDER, COMPANY} = process.env;

const nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET,
});

module.exports.sendSMS = function(req, res) {
    const phone = req.body.phone || SMS_PLACEHOLDER;
    nexmo.message.sendSms(COMPANY, phone, 'You have a new customer.', (error, response) => {
        if (error) {
            console.error(error);
            res.send('the SMS couldn\'t be delivered');
        } else {
            res.send('the SMS was successfully sent');
        }
    })
};