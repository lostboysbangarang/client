console.log(`\n\tMailer\n\n`)
// module.exports = 
const nodeMail = require('nodemailer');

const { Router } = require('express')
const { Sequelize } = require('sequelize')
// const UserModel = require('../models/user')
// const bcrypt = require('bcrypt')
const router = Router()
// console.log(`\n\tBody:\t`, req.body.form)

router.post('/mail', (req, res) => {
    const trains = nodeMail.createTransport({
        service: 'hotmail',
        auth: {
            user: 'AmalaDlamini1@hotmail.com',
            pass: 'PortfolioMail1313'
        }
    });
    console.log(`\n\tBody:\t`, req.body)
    console.log(`\n\tTest\n\n`)
    const options = {
        from: 'AmalaDlamini1@hotmail.com',
        // to: 'Hayden@LugoWebDevelopment.com',
        to: 'Hayden@LugoWebDevelopment.com',
        subject: `Portfolio Interest from:\t\t&emsp;${req.body.givenName}`,
        text: `${req.body.message}\n\n          ${req.body.email}`
    }
    console.log(`\n\n`, JSON.stringify(options),`\n\n`)
    trains.sendMail(options, function (err, info) {
        if(err) {
                console.log(err)
                res.send(JSON.stringify(`Message`))
                return;
            }
            console.log(`\nSent:\n`, JSON.stringify(info))
        });
    res.sendStatus(200);
})

module.exports = router