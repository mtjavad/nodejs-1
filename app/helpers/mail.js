const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
        user: '', // generated ethereal user
        pass: '' // generated ethereal password
    }
});

module.exports = transporter;