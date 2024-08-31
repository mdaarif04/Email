const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    // const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "justen53@ethereal.email",
        pass: "PJdDQnjeFAeHXaAvTs",
      },
    });
//   res.send("I'm Sending Email ");

const info = await transporter.sendMail({
  from: '"Md Aarif Raza 👻" <justen53@ethereal.email>', // sender address
  to: "arazatpoint789@gmail.com ", // list of receivers
  subject: "Hello Md Aarif Raza ", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
});

console.log("Message sent: %s", info.messageId);
res.json(info);
};



module.exports = sendMail;
