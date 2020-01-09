#### Email mit SendGrid verschicken

[SendGrid](https://app.sendgrid.com/)

`npm install --save nodemailer nodemailer-sendgrid-transport`

```
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
}));

transporter.sendMail( {
    to: 'xxxxxxxx@t-online.de',
    from: 'info@node-oderso.de',
    subject: 'Test email',
    html: '<h1> Dies ist ein Test </h1>'
}).then(() => {
    console.log("Email has been sent.");
}).catch(err => {
    console.log(err);
})
```

oder:

```
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
}));

const doit = async () => {
    try {
        await transporter.sendMail({
            to: 'xxxxxxxx@t-online.de',
            from: 'info@node-oderso.de',
            subject: 'Test email',
            html: '<h1> This is a test. </h1>'
        })
        console.log("Email has been sent.")
    } catch (err) {
        console.log(err);
    }
}

doit();
```