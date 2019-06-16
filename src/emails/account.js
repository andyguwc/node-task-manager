const sgMail = require('@sendgrid/mail')
// const sendgridAPIKey = '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'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'tianyou.gu@gmail.com',
//     from: 'tianyou.gu@gmail.com',
//     subject: 'test email from sendgrid',
//     text: 'the email works'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'tianyou.gu@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'tianyou.gu@gmail.com',
        subject: 'Dont cancel yo',
        text: `goodby ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}