const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
import * as dotenv from "dotenv";

dotenv.config();

export const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_KEY, // Replace with your Mailgun API Key
});
