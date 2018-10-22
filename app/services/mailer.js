const nodemailer = require('nodemailer');
const authentication = require('../security/authentication');

const {MAIL, SERVICE_HOST, MAIL_PLACEHOLDER} = process.env;

const transporter = nodemailer.createTransport({
    host: SERVICE_HOST,
    port: 465,
    secure: true,
    auth: {
        ...authentication.authenticate.credentials,
        type: 'OAuth2',
        accessToken: authentication.authenticate.accessToken
    }
});

const mailOptions = {
    from: MAIL,
    subject: 'Subject',
    text: 'Corpus',
};

module.exports.sendMail = function(req, res) {
    transporter.sendMail({
        ...mailOptions,
        to: req.body.mail || MAIL_PLACEHOLDER,
    }, (error, info) => {
        if (error) {
            console.log(error);
            res.send('the mail couldn\'t be delivered');
        } else {
            console.log(new Date(Date.now()).toLocaleString() + ' => mail sent to ' + req.body.mail);
            res.send('the mail was successfully sent');
        }
    });
};
