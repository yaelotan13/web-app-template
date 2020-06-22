const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: functions.config().server.email, // generated ethereal user
      pass: functions.config().server.password, // generated ethereal password
    },
});

console.log('email');
console.log(functions.config().server);

module.exports = transporter;