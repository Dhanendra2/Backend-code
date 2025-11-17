 const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: ' dhanendraparihar519@gmail.com', 
      pass: ' jzrs fien pzlm dbtl', 
    },
  });

  const mailOptions = {
    from: ' dhanendraparihar519@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };