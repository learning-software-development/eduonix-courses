const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', (req, res, next) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ben.parker@gmail.com',
      pass: ''
    }
  });

  let mailOptions = {
    from: '"Ben Parker" <ben.parker@gmail.com>',
    to: 'support@techguywebsolutions.com',
    subject: 'PCRepair Contact Request',
    text: `You have a submission from ... Name: ${req.body.name}, Email: ${req.body.email}, Message: ${req.body.message}`,
    html: `<p>You have a submission from ...</p><ul><li>Name: ${req.body.name}</li><li>Email: ${req.body.email}</li><li>Message: ${req.body.message}</li></ul>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Message Sent: ${info.response}`);
    }
    res.redirect('/');
  });
});

module.exports = router;
