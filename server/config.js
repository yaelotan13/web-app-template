const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

dotenv.config();

const oauth2Client = new OAuth2(
    process.env.clientId, 
    process.env.clientSecret, 
    process.env.redirectUrl 
);

oauth2Client.setCredentials({
    refresh_token: process.env.refreshToken
});

const accessToken = oauth2Client.getAccessToken()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: process.env.email, 
         clientId: process.env.clientId,
         clientSecret: process.env.clientSecret,
         refreshToken: process.env.refreshToken,
         accessToken: accessToken
    }
});

module.exports = transporter;