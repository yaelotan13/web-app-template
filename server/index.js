const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const transporter = require('./config');

const app = express();
dotenv.config();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  console.log(req.body);
  try {
    const mailOptions = {
        from: process.env.email,
        to: process.env.email,
        subject: req.body.fullName, 
        html: req.body.content
    };

    console.log('sending email');
    transporter.sendMail(mailOptions, function(error, info) {
        console.log(info);
        console.log(error);
        if (error) {
            res.status(500).send('has error');
        } else {
            res.status(200).send('ok');
        }
    })
  } catch (error) {
    res.status(500).send('has error');
  };
});

app.listen(3000, () => {
  console.log('server start on port 3000');
});