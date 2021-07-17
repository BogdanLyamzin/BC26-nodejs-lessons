const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_KEY} = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const mail = {
    to: "bogdan.lyamzin.d@meta.ua",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Регистрация на сайте",
    html: "<h2>Welcome to our site</h2>"
};

sgMail.send(mail)
    .then(()=> console.log("Email send"))
    .catch(error => console.log("error"))