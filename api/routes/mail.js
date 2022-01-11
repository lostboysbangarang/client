console.log(`\n\tMailer\n\n`)
const nodeMail = require('nodemailer');
const transporter = nodeMail.createTransport(transporter, {
    service: 'hotmail',
    auth: {
        user: 'AmalaDlamini1',
        pass: 'PortfolioMail1313'
    }
});
// module.exports = 

const { Router } = require('express')
const { Sequelize } = require('sequelize')
// const UserModel = require('../models/user')
// const bcrypt = require('bcrypt')
const router = Router()

router.post('/mail', (req, res) => {
    console.log(`\n\tBody:\t${req.body}`)
    // const options = {
    //     from: 'AmalaDlamini1@hotmail.com',
    //     to: 'Hayden@LugoWebDevelopment.com',
    //     subject: `Portfolio Interest from:\t${req.body.givenName}`,
    //     test: `${req.body.message}\n\n${req.body.email}`
    // }
    // transporter.sendMail(options, function (err, info) {
    //     if(err) {
    //         console.log(err)
    //         return;
    //     }
    //     console.log(`\nSent:\n${info}`)
    // });
})

module.exports = router