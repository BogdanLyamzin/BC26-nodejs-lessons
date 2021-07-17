const nodemailer = require("nodemailer");
require("dotenv").config();

const {EMAIL_PASSWORD} = process.env;

const config = {
    host: "mail.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "nogdan.lyamzin.d@meta.ua",
        pass: EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(config);

const mail = {
    to: "bogdan.lyamzin.d@gmail.com",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "Регистрация на сайте",
    html: "<h2>Welcome to our site</h2>"
};

transporter.sendMail(mail)
    .then(info => console.log(info))
    .catch(error => console.log(error))