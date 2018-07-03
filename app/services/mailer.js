const nodemailer = require('nodemailer');

const {MAIL, PASS, SERVICE, MAIL_PLACEHOLDER} = process.env;

const transporter = nodemailer.createTransport({
    service: SERVICE,
    auth: {
        user: MAIL,
        pass: PASS,
    }
});

const mailOptions = {
    from: MAIL,
    subject: 'You have a new customer.',
    text: 'You have a new customer.',
};

module.exports.sendMail = function(req, res) {
    transporter.sendMail({
        ...mailOptions,
        to: req.body.mail || MAIL_PLACEHOLDER,
    }, (error, info) => {
        if (error) {
            console.error(error);
            res.send('the mail couldn\'t be delivered');
        } else {
            res.send('the mail was successfully sent');
        }
    });
};

